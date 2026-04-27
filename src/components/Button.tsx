import { ButtonHTMLAttributes } from 'react'
import { buttonVariants, buttonSizes } from '../theme/colors'
import { joinClasses, baseButtonStyles } from '../utils/styles'

type Variant = keyof typeof buttonVariants
type Size = keyof typeof buttonSizes

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      className={joinClasses(baseButtonStyles, buttonVariants[variant], buttonSizes[size], className)}
      {...props}
    >
      {children}
    </button>
  )
}
