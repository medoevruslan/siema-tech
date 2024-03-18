import { useState } from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';

import { getQuiz } from '@/data/getQuiz';
import { ErrorBoundary } from '@/page/error';
import { Quiz } from '@/schema/quiz.schema';

type GameContextProps = {
  isGameEnded: boolean;
  isMobileOpen: boolean;
  isWin: boolean;
  quiz: Quiz[];
  setIsGameEnded: (value: boolean) => void;
  setIsMobileOpen: (value: boolean) => void;
  setIsWin: (value: boolean) => void;
  setQuiz: (quiz: Quiz[]) => void;
  setStep: (values: number) => void;
  step: number;
};

export const useGameContext = () => useOutletContext<GameContextProps>();

export function GameContext() {
  const [step, setStep] = useState(0);
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [isWin, setIsWin] = useState(false);
  const [quiz, setQuiz] = useState(() => getQuiz());
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <ErrorBoundary error={'Undefined error occured, please refresh the page or press the button'}>
      <Outlet
        context={
          {
            isGameEnded,
            isMobileOpen,
            isWin,
            quiz,
            setIsGameEnded,
            setIsMobileOpen,
            setIsWin,
            setQuiz,
            setStep,
            step,
          } satisfies GameContextProps
        }
      />
    </ErrorBoundary>
  );
}
