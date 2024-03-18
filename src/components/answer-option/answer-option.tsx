import React, { ComponentPropsWithoutRef } from 'react';

import { OptionContainer } from '@/components/option-container/option-container';
import * as RadioGroup from '@radix-ui/react-radio-group';
import clsx from 'clsx';

import s from './answer-option.module.css';

export type OptionViews = 'correct' | 'inactive' | 'selected' | 'wrong' | undefined;

type Props = {
  children?: React.ReactNode;
  className?: string;
  value: string;
  view?: OptionViews;
} & ComponentPropsWithoutRef<'div'>;

export function AnswerOption({ children, className, value, view, ...rest }: Props) {
  return (
    <RadioGroup.Item asChild value={value}>
      <div className={clsx(s.question, className)} {...rest}>
        <OptionContainer className={clsx(s.option, view && s[view])}>{children}</OptionContainer>
      </div>
    </RadioGroup.Item>
  );
}
