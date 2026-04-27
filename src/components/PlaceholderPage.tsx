
import { Card } from './Card'

interface PlaceholderPageProps {
  title: string
  description: string
}

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold text-zinc-900 dark:text-white">{title}</h1>
        <p className="mt-0.5 text-sm text-zinc-500 dark:text-zinc-400">{description}</p>
      </div>
      <Card className="flex h-64 items-center justify-center text-zinc-400 dark:text-zinc-600 text-sm">
        Content coming soon
      </Card>
    </div>
  )
}
