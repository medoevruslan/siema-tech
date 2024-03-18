import React from 'react';

import { Typography } from '@/components/ui/typography';
import clsx from 'clsx';
import { useMediaQuery } from 'usehooks-ts';

import s from './option-container.module.css';

type Props = {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  textClassName?: string;
};

export function OptionContainer({ children, className, disabled, textClassName }: Props) {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div className={clsx(s.container, className)}>
      <svg
        fill={'currentColor'}
        height={'100%'}
        preserveAspectRatio={'none'}
        viewBox={'0 0 373 72'}
        width={'100%'}
        xmlns={'http://www.w3.org/2000/svg'}
      >
        <path
          d={
            'M22.7172 5.28344C24.8781 2.28016 28.3521 0.5 32.052 0.5H340.948C344.648 0.5 348.122 2.28016 350.283 5.28344L372.384 36L350.283 66.7166C348.122 69.7198 344.648 71.5 340.948 71.5H32.052C28.3521 71.5 24.8781 69.7198 22.7172 66.7166L0.615976 36L22.7172 5.28344Z'
          }
          stroke={'currentColor'}
        />
      </svg>
      <Typography
        className={clsx(s.text, disabled && s.disabled, textClassName)}
        mobile={isMobile}
        variant={'option'}
      >
        {children}
      </Typography>
    </div>
  );
}
