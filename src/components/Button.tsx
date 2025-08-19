import React from 'react'
import clsx from 'clsx'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  as?: 'button' | 'a'
  href?: string
  variant?: 'primary' | 'ghost' | 'default'
}

export default function Button({ as='button', href, variant='default', className, children, ...props }: Props){
  const classes = clsx('btn', variant === 'primary' && 'btn-primary', variant === 'ghost' && 'btn-ghost', className)
  if(as === 'a' && href){
    return <a className={classes} href={href} {...(props as any)}>{children}</a>
  }
  return <button className={classes} {...props}>{children}</button>
}