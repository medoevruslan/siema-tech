import { useState } from 'react'
import { Outlet, useOutletContext } from 'react-router-dom'

import { Quiz, getQuiz } from '@/data/getQuiz'

type GameContextProps = {
  isGameEnded: boolean
  isGameStarted: boolean
  isWin: boolean
  quiz: Quiz[]
  setIsGameEnded: (value: boolean) => void
  setIsGameStarted: (value: boolean) => void
  setIsWin: (value: boolean) => void
  setQuiz: (quiz: Quiz[]) => void
  setStep: (values: number) => void
  step: number
}

export const useGameContext = () => {
  return useOutletContext<GameContextProps>()
}

export const GameContext = () => {
  const [step, setStep] = useState(0)
  const [isGameEnded, setIsGameEnded] = useState(false)
  const [isGameStarted, setIsGameStarted] = useState(false)
  const [isWin, setIsWin] = useState(false)
  const [quiz, setQuiz] = useState(() => getQuiz())

  return (
    <Outlet
      context={
        {
          isGameEnded,
          isGameStarted,
          isWin,
          quiz,
          setIsGameEnded,
          setIsGameStarted,
          setIsWin,
          setQuiz,
          setStep,
          step,
        } satisfies GameContextProps
      }
    />
  )
}
