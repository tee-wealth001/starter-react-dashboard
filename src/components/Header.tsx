
import { Moon, Sun, Menu, Bell, Search } from 'lucide-react'
import { Button } from './Button'
import { Avatar } from './Avatar'

interface HeaderProps {
  isDark: boolean
  onToggleDark: () => void
  onMenuClick: () => void
  sidebarCollapsed: boolean
}

export function Header({ isDark, onToggleDark, onMenuClick, sidebarCollapsed }: HeaderProps) {
  return (
    <header
      className={[
        'fixed top-0 right-0 z-10 flex h-16 items-center gap-3 border-b border-zinc-200 bg-white px-4',
        'dark:border-zinc-800 dark:bg-zinc-950 transition-all duration-250 sidebar-transition',
        sidebarCollapsed ? 'lg:left-[68px]' : 'lg:left-60',
        'left-0',
      ].join(' ')}
    >
      <Button variant="ghost" size="icon" onClick={onMenuClick} className="lg:hidden">
        <Menu size={18} />
      </Button>

      <div className="relative hidden sm:flex flex-1 max-w-sm items-center">
        <Search size={15} className="absolute left-3 text-zinc-400 pointer-events-none" />
        <input
          type="text"
          placeholder="Search…"
          className={[
            'w-full rounded-lg border border-zinc-200 bg-zinc-50 py-2 pl-9 pr-3 text-sm',
            'text-zinc-700 placeholder-zinc-400 outline-none transition-colors',
            'focus:border-zinc-400 focus:bg-white focus:ring-2 focus:ring-zinc-200',
            'dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:placeholder-zinc-500',
            'dark:focus:border-zinc-600 dark:focus:bg-zinc-800 dark:focus:ring-zinc-800',
          ].join(' ')}
        />
      </div>

      <div className="flex-1" />

      <div className="flex items-center gap-1">
        <Button variant="ghost" size="icon" className="relative">
          <Bell size={18} />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-rose-500 ring-2 ring-white dark:ring-zinc-950" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={onToggleDark}
          title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          aria-label="Toggle dark mode"
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </Button>

        <div className="mx-2 h-6 w-px bg-zinc-200 dark:bg-zinc-800" />

        <button className="flex items-center gap-2 rounded-lg px-2 py-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
          <Avatar initials="JD" size="sm" />
          <span className="hidden md:block text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Jane Doe
          </span>
        </button>
      </div>
    </header>
  )
}
