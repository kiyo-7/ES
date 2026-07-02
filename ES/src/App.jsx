import { useState } from 'react'
import questions from './quizData'
import UserSelect from './UserSelect'
import StartScreen from './StartScreen'
import QuizQuestion from './QuizQuestion'
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
  const [shuffled, setShuffled] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState([])

  function selectUser(selectedUser) {
    setUser(selectedUser)
    setScreen('start')
  }

  function startGame() {
    setShuffled(shuffle(questions))
    setCurrentIndex(0)
    setScore(0)
    setAnswers([])
    setScreen('quiz')
  }

  function handleAnswer(questionId, selectedAnswer, correct, formalityCorrect) {
    if (correct) setScore(prev => prev + 1)
    setAnswers(prev => [...prev, { questionId, selectedAnswer, correct, formalityCorrect }])
  }

  function nextQuestion() {
    if (currentIndex < shuffled.length - 1) {
      setCurrentIndex(prev => prev + 1)
    } else {
      setScreen('results')
    }
  }

  function restart() {
    setShuffled(shuffle(questions))
    setCurrentIndex(0)
    setScore(0)
    setAnswers([])
    setScreen('start')
  }

  const current = shuffled[currentIndex]
  const total = shuffled.length

  return (
    <div>
      {screen === 'select' && <UserSelect onSelect={selectUser} />}
      {screen === 'start' && <StartScreen user={user} onStart={startGame} onBack={() => setScreen('select')} />}
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
      {screen === 'results' && (
        <ResultsScreen
          score={score}
          totalQuestions={total}
          answers={answers}
          user={user}
          onRestart={restart}
          onBack={() => setScreen('select')}
        />
      )}
    </div>
  )
}
