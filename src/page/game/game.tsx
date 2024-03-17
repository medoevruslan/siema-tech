import { Container } from '@/components/container/container'
import { QuestionSection } from '@/components/question-section/question-section'
import { useGameContext } from '@/context/game.context'
import { getQuiz } from '@/data/getQuiz'

import s from './game.module.css'

export const Game = () => {
  const quiz = getQuiz()
  const { step } = useGameContext()

  const currentQuiz = quiz[step]

  return (
    <section className={s.wrapper}>
      <Container className={s.container}>
        <article className={s.questionSection}>
          <QuestionSection quiz={currentQuiz} />
        </article>
      </Container>
      <article></article>
    </section>
  )
}
