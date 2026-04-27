import { useState } from 'react'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { OverviewPage } from './components/OverviewPage'
import { PlaceholderPage } from './components/PlaceholderPage'
import { useDarkMode } from './hooks/useDarkMode'

type PageId = 'overview' | 'analytics' | 'customers' | 'orders' | 'reports' | 'settings'

interface PageMeta {
  title: string
  description: string
}

const PAGE_META: Record<PageId, PageMeta> = {
  overview:  { title: 'Overview',   description: 'Welcome back, Jane.'              },
  analytics: { title: 'Analytics',  description: 'Traffic and engagement metrics.'  },
  customers: { title: 'Customers',  description: 'Manage your customer base.'       },
  orders:    { title: 'Orders',     description: 'Track and manage orders.'          },
  reports:   { title: 'Reports',    description: 'Generate and export reports.'      },
  settings:  { title: 'Settings',   description: 'Configure your workspace.'        },
}

export default function App() {
  const [isDark, toggleDark] = useDarkMode()
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activePage, setActivePage] = useState<PageId>('overview')

  const meta = PAGE_META[activePage]

  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-zinc-950 transition-colors duration-200">
      <Sidebar
        collapsed={collapsed}
        onToggle={() => setCollapsed((c) => !c)}
        mobileOpen={mobileOpen}
        onMobileClose={() => setMobileOpen(false)}
        activePage={activePage}
        onNavigate={setActivePage}
      />
      <Header
        isDark={isDark}
        onToggleDark={toggleDark}
        onMenuClick={() => setMobileOpen((o) => !o)}
        sidebarCollapsed={collapsed}
      />
      <main
        className={[
          'min-h-screen pt-16 transition-all duration-250 sidebar-transition',
          collapsed ? 'lg:pl-[68px]' : 'lg:pl-60',
        ].join(' ')}
      >
        <div className="mx-auto p-6">
          {activePage === 'overview' ? (
            <OverviewPage />
          ) : (
            <PlaceholderPage title={meta.title} description={meta.description} />
          )}
        </div>
      </main>
    </div>
  )
}
