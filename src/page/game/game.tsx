import { Navigate } from 'react-router-dom'

import { Container } from '@/components/container/container'
import { PriceSection } from '@/components/price-section/price-section'
import { QuestionSection } from '@/components/question-section/question-section'
import { useGameContext } from '@/context/game.context'
import z from 'zod'

import s from './game.module.css'

export const Game = () => {
  const { isGameEnded, quiz, setIsGameEnded, setQuiz, setStep, step } = useGameContext()

  const currentQuiz = quiz[step]
  const prices = quiz.map(q => ({ completed: q?.completed, id: q.id, value: q?.price })) || []

  const handleSelectOption = (value: string) => {
    if (currentQuiz.correct === value) {
      setQuiz(quiz.map(q => (q.id === currentQuiz.id ? { ...q, completed: true } : q)))
      setStep(step + 1)
    } else {
      setIsGameEnded(true)
    }
  }

  if (isGameEnded) {
    return <Navigate to={'/game-over'} />
  }

  return (
    <section className={s.wrapper}>
      <Container className={s.container}>
        <article className={s.questionSection}>
          <QuestionSection onSelect={handleSelectOption} quiz={currentQuiz} />
        </article>
      </Container>
      <article className={s.priceSection}>
        <PriceSection currentOptionId={currentQuiz.id} prices={prices} />
      </article>
    </section>
  )
}
