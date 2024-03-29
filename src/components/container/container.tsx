import { ComponentProps } from 'react';

import clsx from 'clsx';

import s from './container.module.css';

export function Container(props: ComponentProps<'div'>) {
  return (
    <div className={clsx(s.container, props.className)} {...props}>
      {props.children}
    </div>
  );
}
