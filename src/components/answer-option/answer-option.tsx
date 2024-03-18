import React, { ComponentPropsWithoutRef } from 'react';

import { OptionContainer } from '@/components/option-container/option-container';
import clsx from 'clsx';

import s from './answer-option.module.css';

export type OptionVariants = 'correct' | 'inactive' | 'selected' | 'wrong' | undefined;

type Props = {
  children?: React.ReactNode;
  className?: string;
  variant?: OptionVariants;
} & ComponentPropsWithoutRef<'div'>;

export function AnswerOption({ children, className, variant, ...rest }: Props) {
  return (
    <div className={clsx(s.question, className)} {...rest}>
      <OptionContainer className={clsx(s.option, variant && s[variant])}>
        {children}
      </OptionContainer>
    </div>
  );
}
