import React, {ComponentPropsWithoutRef, CSSProperties, ElementType} from "react";
import clsx from "clsx";

import s from './typography.module.css'

const variantMapping = {
  headline: 'h1',
  button: 'p',
  option: 'p',
  question: 'h6',
  link1: 'a',
  link2: 'a',
} as const

type VariantKey = keyof typeof variantMapping;

type TypographyProps<T extends ElementType> = {
  className?: string,
  style?: CSSProperties
  variant: VariantKey
  mobile?: boolean
  children: React.ReactNode
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType>({ variant, children, className, mobile = false, ...rest }: TypographyProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TypographyProps<T>>) => {
  const Component = variantMapping[variant]
  return <Component className={clsx(s[variant],mobile && s.mobile, className )} {...rest}>{ children }</Component>
}
