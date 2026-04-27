
import { LucideIcon } from 'lucide-react'
import { accentColors, textColors } from '../theme/colors'
import { joinClasses } from '../utils/styles'
import { Card } from './Card'

type AccentColor = keyof typeof accentColors

interface StatCardProps {
  label: string
  value: string
  change?: number
  changeLabel?: string
  icon?: LucideIcon
  accent?: AccentColor
}

export function StatCard({ label, value, change, changeLabel, icon: Icon, accent = 'zinc' }: StatCardProps) {
  const isPositive = (change ?? 0) >= 0

  return (
    <Card className="flex flex-col gap-4">
      <div className="flex items-start justify-between">
        <span className={textColors.label}>{label}</span>
        {Icon && (
          <span className={joinClasses('rounded-lg p-2', accentColors[accent])}>
            <Icon size={16} />
          </span>
        )}
      </div>
      <div>
        <p className={joinClasses('text-2xl font-bold tracking-tight', textColors.primary)}>{value}</p>
        {change !== undefined && (
          <p className={joinClasses('mt-1 text-xs font-medium', isPositive ? textColors.positive : textColors.negative)}>
            {isPositive ? '▲' : '▼'} {Math.abs(change)}%{' '}
            <span className="text-zinc-400 dark:text-zinc-500 font-normal">{changeLabel}</span>
          </p>
        )}
      </div>
    </Card>
  )
}
