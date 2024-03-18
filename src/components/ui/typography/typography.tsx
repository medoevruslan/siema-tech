import React, { CSSProperties, ComponentPropsWithoutRef, ElementType } from 'react';

import clsx from 'clsx';

import s from './typography.module.css';

const variantMapping = {
  button: 'p',
  headline: 'h1',
  link1: 'a',
  link2: 'a',
  option: 'p',
  question: 'h6',
} as const;

type VariantKey = keyof typeof variantMapping;

type TypographyProps<T extends ElementType> = {
  children: React.ReactNode;
  className?: string;
  mobile?: boolean;
  style?: CSSProperties;
  variant: VariantKey;
} & ComponentPropsWithoutRef<T>;

export function Typography<T extends ElementType>({
  children,
  className,
  mobile = false,
  variant,
  ...rest
}: TypographyProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TypographyProps<T>>) {
  const Component = variantMapping[variant];

  return (
    <Component className={clsx(s[variant], mobile && s.mobile, className)} {...rest}>
      {children}
    </Component>
  );
}
