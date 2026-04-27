

type AvatarSize = 'sm' | 'md' | 'lg'

const sizes: Record<AvatarSize, string> = {
  sm: 'h-7 w-7 text-xs',
  md: 'h-9 w-9 text-sm',
  lg: 'h-11 w-11 text-base',
}

interface AvatarProps {
  src?: string
  alt?: string
  initials?: string
  size?: AvatarSize
  className?: string
}

export function Avatar({ src, alt = '', initials = '?', size = 'md', className = '' }: AvatarProps) {
  return (
    <div
      className={[
        'relative inline-flex shrink-0 items-center justify-center rounded-full',
        'bg-zinc-200 font-semibold text-zinc-600',
        'dark:bg-zinc-700 dark:text-zinc-300',
        sizes[size],
        className,
      ].join(' ')}
    >
      {src ? (
        <img src={src} alt={alt} className="h-full w-full rounded-full object-cover" />
      ) : (
        <span>{initials}</span>
      )}
    </div>
  )
}
