import { AnswerOption } from '@/components/answer-option'
import { Typography } from '@/components/ui/typography'
import { Quiz } from '@/schema/quiz.schema'
import clsx from 'clsx'
import { useMediaQuery } from 'usehooks-ts'

import s from './question-section.module.css'

type Props = {
  onSelect: (value: string) => void
  quiz: Quiz
}
export function QuestionSection({ onSelect, quiz }: Props) {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div className={s.container}>
      <Typography className={s.question} mobile={isMobile} variant={'question'}>
        {quiz.question}
      </Typography>
      <div className={s.answers}>
        {Object.entries(quiz.answers).map(([variant, answer]) => (
          <AnswerOption
            className={clsx(s.answer)}
            key={variant + answer}
            onClick={() => onSelect(variant)}
          >
            <span className={s.variant}>{variant}</span>
            {answer}
          </AnswerOption>
        ))}
      </div>
    </div>
  );
}
