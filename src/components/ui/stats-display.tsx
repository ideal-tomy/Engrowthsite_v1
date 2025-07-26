import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Counter } from '@/components/animations/page-transition'

interface StatItem {
  id: string
  value: number | string
  label: string
  description?: string
  icon?: ReactNode
  suffix?: string
  prefix?: string
  animated?: boolean
}

interface StatsDisplayProps {
  stats: StatItem[]
  className?: string
  layout?: 'grid' | 'inline'
  columns?: 2 | 3 | 4
}

export function StatsDisplay({
  stats,
  className,
  layout = 'grid',
  columns = 3,
}: StatsDisplayProps) {
  if (layout === 'inline') {
    return (
      <div className={cn('flex flex-wrap justify-center gap-8', className)}>
        {stats.map(stat => (
          <div key={stat.id} className="text-center">
            <StatItem stat={stat} />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div
      className={cn(
        'grid gap-8',
        {
          'grid-cols-1 md:grid-cols-2': columns === 2,
          'grid-cols-1 md:grid-cols-3': columns === 3,
          'grid-cols-1 md:grid-cols-2 lg:grid-cols-4': columns === 4,
        },
        className
      )}
    >
      {stats.map(stat => (
        <StatItem key={stat.id} stat={stat} />
      ))}
    </div>
  )
}

function StatItem({ stat }: { stat: StatItem }) {
  return (
    <div className="text-center space-y-2">
      {stat.icon && (
        <div className="w-12 h-12 mx-auto mb-4 text-primary">{stat.icon}</div>
      )}

      <div className="text-3xl md:text-4xl font-bold text-primary">
        {stat.animated && typeof stat.value === 'number' ? (
          <Counter end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
        ) : (
          <>
            {stat.prefix}
            {stat.value}
            {stat.suffix}
          </>
        )}
      </div>

      <div className="font-serif text-lg font-semibold text-neutral-900">
        {stat.label}
      </div>

      {stat.description && (
        <p className="text-sm text-neutral-600 leading-relaxed">
          {stat.description}
        </p>
      )}
    </div>
  )
}

// プリセットされた統計パターン
export function EngrowthStats() {
  const stats: StatItem[] = [
    {
      id: 'satisfaction',
      value: 95,
      label: '受講者満足度',
      suffix: '%',
      animated: true,
      description: '90日プログラム完了者アンケート結果',
    },
    {
      id: 'experience',
      value: 100,
      label: '留学経験率',
      suffix: '%',
      animated: true,
      description: '全コンサルタントが海外経験を保有',
    },
    {
      id: 'improvement',
      value: 350,
      label: 'TOEIC平均スコアUP',
      animated: true,
      description: '90日プログラム受講者平均値',
    },
  ]

  return <StatsDisplay stats={stats} columns={3} />
}
