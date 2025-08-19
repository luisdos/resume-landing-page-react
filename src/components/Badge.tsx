import React from 'react'
import clsx from 'clsx'

export default function Badge({className, ...props}: React.HTMLAttributes<HTMLSpanElement>) {
  return <span className={clsx('badge', className)} {...props} />
}