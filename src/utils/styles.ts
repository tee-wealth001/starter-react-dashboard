/**
 * Utility functions for building consistent Tailwind class strings
 */

export function joinClasses(...classes: (string | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ')
}

export const baseTransition = 'transition-colors duration-150'
export const baseButtonStyles = joinClasses(
  'inline-flex items-center justify-center gap-2 rounded-lg font-medium',
  baseTransition,
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400',
  'disabled:opacity-50 disabled:pointer-events-none'
)

export const baseFocusStyles = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400'
