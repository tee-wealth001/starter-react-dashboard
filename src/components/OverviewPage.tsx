
import { TrendingUp, Users, ShoppingCart, DollarSign, ArrowRight, LucideIcon } from 'lucide-react'
import { StatCard } from './StatCard'
import { Card, CardHeader, CardTitle } from './Card'
import { Badge } from './Badge'
import { Avatar } from './Avatar'
import { Button } from './Button'

type BadgeVariant = 'default' | 'success' | 'warning' | 'danger' | 'info'
type AccentColor = 'zinc' | 'emerald' | 'blue' | 'amber' | 'rose'

interface Stat {
  label: string
  value: string
  change: number
  changeLabel: string
  icon: LucideIcon
  accent: AccentColor
}

interface Order {
  id: string
  customer: string
  amount: string
  status: BadgeVariant
  statusLabel: string
  date: string
}

interface Activity {
  user: string
  initials: string
  action: string
  time: string
}

const STATS: Stat[] = [
  { label: 'Total Revenue',    value: '$48,295', change: 12.5, changeLabel: 'vs last month', icon: DollarSign,  accent: 'emerald' },
  { label: 'Active Users',     value: '3,842',   change: 8.1,  changeLabel: 'vs last month', icon: Users,       accent: 'blue'    },
  { label: 'New Orders',       value: '1,257',   change: -3.4, changeLabel: 'vs last month', icon: ShoppingCart, accent: 'amber'  },
  { label: 'Conversion Rate',  value: '4.6%',    change: 1.2,  changeLabel: 'vs last month', icon: TrendingUp,  accent: 'rose'    },
]

const ORDERS: Order[] = [
  { id: '#ORD-001', customer: 'Alice Huang', amount: '$240.00', status: 'success', statusLabel: 'Completed',  date: 'Apr 27' },
  { id: '#ORD-002', customer: 'Ben Torres',  amount: '$89.50',  status: 'warning', statusLabel: 'Pending',    date: 'Apr 26' },
  { id: '#ORD-003', customer: 'Clara Reid',  amount: '$512.00', status: 'success', statusLabel: 'Completed',  date: 'Apr 26' },
  { id: '#ORD-004', customer: 'David Kim',   amount: '$33.00',  status: 'danger',  statusLabel: 'Cancelled',  date: 'Apr 25' },
  { id: '#ORD-005', customer: 'Eva Müller',  amount: '$196.75', status: 'info',    statusLabel: 'Processing', date: 'Apr 25' },
]

const ACTIVITY: Activity[] = [
  { user: 'Alice', initials: 'AH', action: 'placed a new order',          time: '2 min ago'  },
  { user: 'Ben',   initials: 'BT', action: 'updated their profile',        time: '14 min ago' },
  { user: 'Clara', initials: 'CR', action: 'submitted a support ticket',   time: '1 hr ago'   },
  { user: 'David', initials: 'DK', action: 'cancelled order #ORD-004',     time: '3 hr ago'   },
]

export function OverviewPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold text-zinc-900 dark:text-white">Overview</h1>
        <p className="mt-0.5 text-sm text-zinc-500 dark:text-zinc-400">Monday, 27 April 2026</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {STATS.map((s) => <StatCard key={s.label} {...s} />)}
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2 p-0 overflow-hidden">
          <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b border-zinc-100 dark:border-zinc-800">
            <CardTitle>Recent Orders</CardTitle>
            <Button variant="ghost" size="sm" className="gap-1 text-xs">
              View all <ArrowRight size={13} />
            </Button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  {['Order', 'Customer', 'Date', 'Amount', 'Status'].map((h) => (
                    <th key={h} className="whitespace-nowrap px-5 py-3 text-left text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ORDERS.map((o, i) => (
                  <tr key={o.id} className={['transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800/50', i < ORDERS.length - 1 ? 'border-b border-zinc-100 dark:border-zinc-800/80' : ''].join(' ')}>
                    <td className="px-5 py-3 font-mono text-xs text-zinc-500 dark:text-zinc-400">{o.id}</td>
                    <td className="px-5 py-3 font-medium text-zinc-800 dark:text-zinc-200 whitespace-nowrap">{o.customer}</td>
                    <td className="px-5 py-3 text-zinc-400 dark:text-zinc-500 whitespace-nowrap">{o.date}</td>
                    <td className="px-5 py-3 font-medium text-zinc-900 dark:text-zinc-100">{o.amount}</td>
                    <td className="px-5 py-3"><Badge variant={o.status}>{o.statusLabel}</Badge></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card>
          <CardHeader><CardTitle>Activity</CardTitle></CardHeader>
          <ul className="space-y-4">
            {ACTIVITY.map((a, i) => (
              <li key={i} className="flex items-start gap-3">
                <Avatar initials={a.initials} size="sm" />
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="font-semibold">{a.user}</span> {a.action}
                  </p>
                  <p className="mt-0.5 text-xs text-zinc-400 dark:text-zinc-500">{a.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  )
}
