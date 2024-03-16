import React, { ComponentPropsWithoutRef, ElementType } from 'react'

import clsx from 'clsx'

import s from './button.module.css'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  children: React.ReactNode
  classname?: string
  fullwidth?: boolean
  variant: 'primary' /* there could be more variants */
} & ComponentPropsWithoutRef<T>
export const Button = <T extends ElementType = 'button'>(
  props: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>
) => {
  const { as: Component = 'button', children, classname, fullwidth, variant } = props

  return <Component className={clsx(s.button, fullwidth && s.fullwidth, s[variant], classname)}>{children}</Component>
}
