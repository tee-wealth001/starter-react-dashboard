
import {
  LayoutDashboard, BarChart2, Users, ShoppingCart,
  FileText, Settings, ChevronLeft, Zap, LucideIcon,
} from 'lucide-react'

type PageId = 'overview' | 'analytics' | 'customers' | 'orders' | 'reports' | 'settings'

interface NavItemDef {
  icon: LucideIcon
  label: string
  id: PageId
}

const NAV_ITEMS: NavItemDef[] = [
  { icon: LayoutDashboard, label: 'Overview',  id: 'overview'  },
  { icon: BarChart2,       label: 'Analytics', id: 'analytics' },
  { icon: Users,           label: 'Customers', id: 'customers' },
  { icon: ShoppingCart,    label: 'Orders',    id: 'orders'    },
  { icon: FileText,        label: 'Reports',   id: 'reports'   },
]

const BOTTOM_ITEMS: NavItemDef[] = [
  { icon: Settings, label: 'Settings', id: 'settings' },
]

interface NavItemProps {
  icon: LucideIcon
  label: string
  active: boolean
  collapsed: boolean
  onClick: () => void
}

function NavItem({ icon: Icon, label, active, collapsed, onClick }: NavItemProps) {
  return (
    <button
      onClick={onClick}
      title={collapsed ? label : undefined}
      className={[
        'group relative flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors duration-150',
        active
          ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900'
          : 'text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100',
      ].join(' ')}
    >
      <Icon size={18} className="shrink-0" />
      <span
        className={[
          'origin-left whitespace-nowrap transition-all duration-250',
          collapsed ? 'w-0 overflow-hidden opacity-0' : 'w-auto opacity-100',
        ].join(' ')}
      >
        {label}
      </span>
      {collapsed && (
        <span className="pointer-events-none absolute left-full ml-3 hidden rounded-md bg-zinc-900 px-2 py-1 text-xs text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 dark:bg-zinc-100 dark:text-zinc-900 lg:block z-50">
          {label}
        </span>
      )}
    </button>
  )
}

interface SidebarProps {
  collapsed: boolean
  onToggle: () => void
  mobileOpen: boolean
  onMobileClose: () => void
  activePage: PageId
  onNavigate: (id: PageId) => void
}

export function Sidebar({ collapsed, onToggle, mobileOpen, onMobileClose, activePage, onNavigate }: SidebarProps) {
  return (
    <>
      {mobileOpen && (
        <div className="fixed inset-0 z-20 bg-black/40 lg:hidden" onClick={onMobileClose} />
      )}
      <aside
        className={[
          'fixed left-0 top-0 z-30 flex h-full flex-col border-r border-zinc-200 bg-white sidebar-transition',
          'dark:border-zinc-800 dark:bg-zinc-950',
          collapsed ? 'lg:w-[68px]' : 'lg:w-60',
          mobileOpen ? 'translate-x-0 w-60' : '-translate-x-full lg:translate-x-0',
        ].join(' ')}
      >
        <div className="flex h-16 shrink-0 items-center border-b border-zinc-200 dark:border-zinc-800 px-4 gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-zinc-900 dark:bg-white">
            <Zap size={16} className="text-white dark:text-zinc-900" />
          </div>
          <span
            className={[
              'text-base font-bold text-zinc-900 dark:text-white whitespace-nowrap transition-all duration-250',
              collapsed ? 'lg:w-0 lg:overflow-hidden lg:opacity-0' : 'opacity-100',
            ].join(' ')}
          >
            Pulse
          </span>
        </div>

        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-3">
          {NAV_ITEMS.map((item) => (
            <NavItem
              key={item.id}
              {...item}
              collapsed={collapsed}
              active={activePage === item.id}
              onClick={() => { onNavigate(item.id); onMobileClose() }}
            />
          ))}
        </nav>

        <div className="border-t border-zinc-200 dark:border-zinc-800 p-3 flex flex-col gap-1">
          {BOTTOM_ITEMS.map((item) => (
            <NavItem
              key={item.id}
              {...item}
              collapsed={collapsed}
              active={activePage === item.id}
              onClick={() => { onNavigate(item.id); onMobileClose() }}
            />
          ))}
          <button
            onClick={onToggle}
            className="mt-1 hidden lg:flex w-full items-center justify-center rounded-lg p-2 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200 transition-colors duration-150"
            title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            <ChevronLeft
              size={18}
              className={['transition-transform duration-250', collapsed ? 'rotate-180' : ''].join(' ')}
            />
          </button>
        </div>
      </aside>
    </>
  )
}
