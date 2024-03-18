import { AnswerOption, OptionViews } from '@/components/answer-option';
import { Typography } from '@/components/ui/typography';
import { Quiz } from '@/schema/quiz.schema';
import * as RadioGroup from '@radix-ui/react-radio-group';
import clsx from 'clsx';
import { useMediaQuery } from 'usehooks-ts';

import s from './question-section.module.css';

type Props = {
  onSelect: (value: string) => void;
  quiz: Quiz;
  selected: string;
  showCorrect: OptionViews;
};
export function QuestionSection({ onSelect, quiz, selected, showCorrect }: Props) {
  const isMobile = useMediaQuery('(max-width: 768px)');

  const handleSetView = (variant: string) => {
    return selected === variant
      ? showCorrect === 'inactive'
        ? 'selected'
        : showCorrect
      : undefined;
  };

  return (
    <div className={s.container}>
      <Typography className={s.question} mobile={isMobile} variant={'question'}>
        {quiz.question}
      </Typography>
      <RadioGroup.Root className={s.answers}>
        {Object.entries(quiz.answers).map(([variant, answer]) => (
          <AnswerOption
            className={clsx(s.answer)}
            key={variant + answer}
            onClick={() => onSelect(variant)}
            value={variant}
            view={handleSetView(variant)}
          >
            <span className={s.variant}>{variant}</span>
            {answer}
          </AnswerOption>
        ))}
      </RadioGroup.Root>
    </div>
  );
}
