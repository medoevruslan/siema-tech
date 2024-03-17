import React, { ComponentPropsWithoutRef } from 'react'

import { OptionContainer } from '@/components/option-container/option-container'
import clsx from 'clsx'

import s from './answer-option.module.css'

type Props = {
  children?: React.ReactNode
  className?: string
  variant?: 'correct' | 'selected' | 'wrong'
} & ComponentPropsWithoutRef<'div'>

export const AnswerOption = ({ children, className, variant, ...rest }: Props) => {
  return (
    <div className={clsx(s.question, className, variant && s[variant])} {...rest}>
      <OptionContainer className={s.option}>{children}</OptionContainer>
    </div>
  )
}
