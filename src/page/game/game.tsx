import { Navigate } from 'react-router-dom';

import { Container } from '@/components/container/container';
import { PriceSection } from '@/components/price-section/price-section';
import { QuestionSection } from '@/components/question-section/question-section';
import { MobileBurger } from '@/components/ui/mobile-burger';
import { useGameContext } from '@/context/game.context';
import { useSelectOption } from '@/hooks/useSelectOption';
import { quizSchema } from '@/schema/quiz.schema';
import clsx from 'clsx';
import { useMediaQuery } from 'usehooks-ts';

import s from './game.module.css';

export function Game() {
  const { isGameEnded, isMobileOpen, isWin, quiz } = useGameContext();
  const isMobile = useMediaQuery('(max-width: 768px)');
  const { currentQuiz, handleSelectOption, selectedOption, showCorrect } = useSelectOption();

  try {
    quizSchema.parse(quiz);
  } catch (err) {
    return <Navigate to={'/error'} />;
  }

  const prices = quiz.map(q => ({ completed: q?.completed, id: q.id, value: q?.price })) || [];

  if (isGameEnded || isWin) {
    return <Navigate to={'/game-over'} />;
  }

  return (
    <section className={s.wrapper}>
      <MobileBurger />
      <Container className={s.container}>
        <article className={s.questionSection}>
          <QuestionSection
            onSelect={handleSelectOption}
            quiz={currentQuiz}
            selected={selectedOption}
            showCorrect={showCorrect}
          />
        </article>
      </Container>
      <article className={clsx(s.priceSection, isMobile && s.mobile, isMobileOpen && s.open)}>
        <PriceSection currentOptionId={currentQuiz?.id} mobile={isMobile} prices={prices} />
      </article>
    </section>
  );
}
