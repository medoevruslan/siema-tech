import { AnswerOption } from '@/components/answer-option'
import { Typography } from '@/components/ui/typography'
import { Quiz } from '@/data/getQuiz'

import s from './question-section.module.css'

type Props = {
  quiz: Quiz
}
export const QuestionSection = ({ quiz }: Props) => {
  return (
    <div className={s.container}>
      <Typography className={s.question} variant={'question'}>
        {quiz.question}
      </Typography>
      <div className={s.answers}>
        {Object.entries(quiz.answers).map(([variant, answer]) => (
          <AnswerOption className={s.answer} key={variant + answer}>
            <span className={s.variant}>{variant}</span>
            {answer}
          </AnswerOption>
        ))}
      </div>
    </div>
  )
}
