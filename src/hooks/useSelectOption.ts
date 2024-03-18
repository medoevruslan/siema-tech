import { useEffect, useRef, useState } from 'react';

import { OptionViews } from '@/components/answer-option';
import { useGameContext } from '@/context/game.context';

export const useSelectOption = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [showCorrect, setShowCorrect] = useState<OptionViews>('inactive');

  const { quiz, setIsGameEnded, setIsWin, setQuiz, setStep, step } = useGameContext();

  const currentQuiz = quiz[step];

  // Ref for timeout
  const timeRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    return () => {
      clearTimeout(timeRef.current);
      setShowCorrect(undefined);
    };
  }, [step]);

  const handleSelectOption = (value: string) => {
    setSelectedOption(value);
    setShowCorrect('inactive'); // Reset showCorrect state
    clearTimeout(timeRef.current); // Clear previous timeout
    timeRef.current = setTimeout(() => {
      setShowCorrect(currentQuiz.correct === value ? 'correct' : 'wrong');
      setTimeout(() => {
        if (currentQuiz.correct === value) {
          setQuiz(quiz.map(q => (q.id === currentQuiz.id ? { ...q, completed: true } : q)));
          setStep(step + 1);
          if (step === quiz.length - 1) {
            setIsWin(true);
          }
        } else {
          setIsGameEnded(true);
        }
      }, 2000); // Add a pause of 1 second before moving to the next step or game over page
    }, 1000); // Show correct answer after 2 seconds
  };

  return {
    currentQuiz,
    handleSelectOption,
    selectedOption,
    showCorrect,
  };
};
