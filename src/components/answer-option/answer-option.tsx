import React from 'react'

import { OptionContainer } from '@/components/option-container/option-container'
import clsx from 'clsx'

import s from './answer-option.module.css'

type Props = {
  children?: React.ReactNode
  className?: string
  variant?: 'correct' | 'selected' | 'wrong'
}

export const AnswerOption = ({ children, className, variant }: Props) => {
  return (
    <div className={clsx(s.question, className, variant && s[variant])}>
      <OptionContainer className={s.option}>{children}</OptionContainer>
    </div>
  )
}
