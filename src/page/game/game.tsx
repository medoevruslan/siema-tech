import { Navigate } from 'react-router-dom';

import { Container } from '@/components/container/container';
import { PriceSection } from '@/components/price-section/price-section';
import { QuestionSection } from '@/components/question-section/question-section';
import { MobileBurger } from '@/components/ui/mobile-burger';
import { useGameContext } from '@/context/game.context';
import { quizSchema } from '@/schema/quiz.schema';
import clsx from 'clsx';
import { useMediaQuery } from 'usehooks-ts';

import s from './game.module.css';

export function Game() {
  const {
    isGameEnded,
    isMobileOpen,
    isWin,
    quiz,
    setIsGameEnded,
    setIsWin,
    setQuiz,
    setStep,
    step,
  } = useGameContext();
  const isMobile = useMediaQuery('(max-width: 768px)');

  try {
    quizSchema.parse(quiz);
  } catch (err) {
    return <Navigate to={'/error'} />;
  }

  const currentQuiz = quiz[step];
  const prices = quiz.map(q => ({ completed: q?.completed, id: q.id, value: q?.price })) || [];

  const handleSelectOption = (value: string) => {
    if (step === quiz.length - 1) {
      setIsWin(true);
    }
    if (currentQuiz.correct === value) {
      setQuiz(quiz.map(q => (q.id === currentQuiz.id ? { ...q, completed: true } : q)));
      setStep(step + 1);
    } else {
      setIsGameEnded(true);
    }
  };

  if (isGameEnded || isWin) {
    return <Navigate to={'/game-over'} />;
  }

  return (
    <section className={s.wrapper}>
      <MobileBurger />
      <Container className={s.container}>
        <article className={s.questionSection}>
          <QuestionSection onSelect={handleSelectOption} quiz={currentQuiz} />
        </article>
      </Container>
      <article className={clsx(s.priceSection, isMobile && s.mobile, isMobileOpen && s.open)}>
        <PriceSection currentOptionId={currentQuiz?.id} mobile={isMobile} prices={prices} />
      </article>
    </section>
  );
}
