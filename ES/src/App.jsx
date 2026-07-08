import { useState, useEffect } from 'react'
import questions from './quizData'
import lesson2Questions from './lesson2Data'
import lesson3Questions from './lesson3Data'
import UserSelect from './UserSelect'
import LessonSelect from './LessonSelect'
import StartScreen from './StartScreen'
import QuizQuestion from './QuizQuestion'
import QuizLesson2 from './QuizLesson2'
import QuizLesson3 from './QuizLesson3'
import ResultsScreen from './ResultsScreen'

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function App() {
  const [screen, setScreen] = useState('select')
  const [user, setUser] = useState(null)
  const [lesson, setLesson] = useState('lesson1')
  const [shuffled, setShuffled] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState([])
  const [startTime, setStartTime] = useState(null)
  const [elapsed, setElapsed] = useState(0)

  useEffect(() => {
    if (screen !== 'quiz' && screen !== 'quiz-lesson2' && screen !== 'quiz-lesson3') return
    if (!startTime) return
    const id = setInterval(() => {
      setElapsed(Math.floor((Date.now() - startTime) / 1000))
    }, 1000)
    return () => clearInterval(id)
  }, [screen, startTime])

  function selectUser(u) {
    setUser(u)
    setScreen('lesson')
  }

  function selectLesson(l) {
    setLesson(l)
    setScreen('start')
  }

  function startGame() {
    if (lesson === 'lesson1') {
      setShuffled(shuffle(questions))
    } else if (lesson === 'lesson3') {
      setShuffled(shuffle(lesson3Questions))
    } else {
      const byCategory = {}
      lesson2Questions.forEach(q => {
        if (!byCategory[q.category]) byCategory[q.category] = []
        byCategory[q.category].push(q)
      })
      const selected = []
      Object.values(byCategory).forEach(items => {
        const shuffledItems = shuffle(items)
        selected.push(...shuffledItems.slice(0, 4))
      })
      setShuffled(shuffle(selected))
    }
    setCurrentIndex(0)
    setScore(0)
    setAnswers([])
    setStartTime(Date.now())
    setElapsed(0)
    if (lesson === 'lesson1') setScreen('quiz')
    else if (lesson === 'lesson3') setScreen('quiz-lesson3')
    else setScreen('quiz-lesson2')
  }

  function testScore() {
    const byCategory = {}
    lesson2Questions.forEach(q => {
      if (!byCategory[q.category]) byCategory[q.category] = []
      byCategory[q.category].push(q)
    })
    const selected = []
    Object.values(byCategory).forEach(items => {
      selected.push(...shuffle(items).slice(0, 4))
    })
    const mockQuestions = shuffle(selected)

    setUser('main-character')
    setLesson('lesson2')
    setShuffled(mockQuestions)
    setCurrentIndex(mockQuestions.length - 1)
    const mockScore = Math.round(mockQuestions.length * 0.94)
    setScore(mockScore)
    setAnswers(mockQuestions.map((q) => ({
      questionId: q.id,
      selectedAnswer: q.spanish,
      correct: true,
      extraCorrect: q.gender !== null ? true : null,
    })))
    setStartTime(null)
    setElapsed(95)
    setScreen('results')
  }

  function handleAnswer(questionId, selectedAnswer, correct, extraCorrect) {
    if (correct) setScore(prev => prev + 1)
    setAnswers(prev => [...prev, { questionId, selectedAnswer, correct, extraCorrect }])
  }

  function nextQuestion() {
    if (currentIndex < shuffled.length - 1) {
      setCurrentIndex(prev => prev + 1)
    } else {
      setScreen('results')
    }
  }

  function restart() {
    setShuffled([])
    setCurrentIndex(0)
    setScore(0)
    setAnswers([])
    setStartTime(null)
    setElapsed(0)
    setScreen('start')
  }

  const current = shuffled[currentIndex]
  const total = shuffled.length

  return (
    <div>
      {screen === 'select' && <UserSelect onSelect={selectUser} />}
      {screen === 'lesson' && <LessonSelect user={user} onSelect={selectLesson} />}
      {screen === 'start' && (
        <StartScreen user={user} lesson={lesson} onStart={startGame} onTest={testScore} onBack={() => setScreen('lesson')} />
      )}
      {screen === 'quiz' && current && (
        <QuizQuestion
          question={current}
          totalQuestions={total}
          currentIndex={currentIndex}
          score={score}
          onAnswer={handleAnswer}
          onNext={nextQuestion}
          user={user}
        />
      )}
      {screen === 'quiz-lesson2' && current && (
        <QuizLesson2
          question={current}
          totalQuestions={total}
          currentIndex={currentIndex}
          score={score}
          elapsed={elapsed}
          onAnswer={handleAnswer}
          onNext={nextQuestion}
          user={user}
        />
      )}
      {screen === 'quiz-lesson3' && current && (
        <QuizLesson3
          question={current}
          totalQuestions={total}
          currentIndex={currentIndex}
          score={score}
          elapsed={elapsed}
          onAnswer={handleAnswer}
          onNext={nextQuestion}
          user={user}
        />
      )}
      {screen === 'results' && (
        <ResultsScreen
          score={score}
          totalQuestions={total}
          answers={answers}
          elapsed={elapsed}
          user={user}
          lesson={lesson}
          onRestart={restart}
          onBack={() => setScreen('select')}
        />
      )}
    </div>
  )
}
