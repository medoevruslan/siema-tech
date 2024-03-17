import { useState } from 'react'
import { Outlet, useOutletContext } from 'react-router-dom'

type GameContextProps = {
  isGameEnded: boolean
  isGameStarted: boolean
  isWin: boolean
  setIsGameEnded?: (value: boolean) => void
  setIsGameStarted?: (value: boolean) => void
  setIsWin?: (value: boolean) => void
  setStep?: (values: number) => void
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

  return (
    <Outlet
      context={
        {
          isGameEnded,
          isGameStarted,
          isWin,
          setIsGameEnded,
          setIsGameStarted,
          setIsWin,
          setStep,
          step,
        } satisfies GameContextProps
      }
    />
  )
}
