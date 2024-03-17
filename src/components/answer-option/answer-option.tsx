import React from 'react'

import clsx from 'clsx'

import s from './answer-option.module.css'

type Props = {
  children: React.ReactNode
  className?: string
  variant?: 'correct' | 'selected' | 'wrong'
}

export const AnswerOption = ({ children, className, variant }: Props) => {
  return (
    <div className={clsx(s.question, className, variant && s[variant])}>
      <OptionContainer />
      <span className={s.text}>{children}</span>
    </div>
  )
}

const OptionContainer = () => {
  return (
    <svg fill={'currentColor'} height={'100%'} width={'100%'} xmlns={'http://www.w3.org/2000/svg'}>
      <path
        d={
          'M22.7172 5.28344C24.8781 2.28016 28.3521 0.5 32.052 0.5H340.948C344.648 0.5 348.122 2.28016 350.283 5.28344L372.384 36L350.283 66.7166C348.122 69.7198 344.648 71.5 340.948 71.5H32.052C28.3521 71.5 24.8781 69.7198 22.7172 66.7166L0.615976 36L22.7172 5.28344Z'
        }
        stroke={'currentColor'}
      />
    </svg>
  )
}
