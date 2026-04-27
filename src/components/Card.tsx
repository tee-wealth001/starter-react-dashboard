import { HTMLAttributes } from 'react'
import type { ReactNode } from 'react'
import { cardStyles } from '../theme/colors'
import { joinClasses } from '../utils/styles'

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

export function Card({ children, className = '', ...props }: CardProps) {
  return (
    <div
      className={joinClasses(cardStyles.base, className)}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardHeader({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={joinClasses(cardStyles.header, className)}>
      {children}
    </div>
  )
}

export function CardTitle({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <h3 className={joinClasses(cardStyles.title, className)}>
      {children}
    </h3>
  )
}
