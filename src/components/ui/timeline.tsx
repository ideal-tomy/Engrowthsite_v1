import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { CheckCircle } from 'lucide-react'

interface TimelineStep {
  id: string
  title: string
  description: string
  icon?: ReactNode
  status?: 'completed' | 'current' | 'upcoming'
  details?: ReactNode
}

interface TimelineProps {
  steps: TimelineStep[]
  className?: string
  orientation?: 'vertical' | 'horizontal'
}

export function Timeline({
  steps,
  className,
  orientation = 'vertical',
}: TimelineProps) {
  if (orientation === 'horizontal') {
    return (
      <div className={cn('flex items-start justify-between', className)}>
        {steps.map((step, index) => (
          <div key={step.id} className="flex flex-col items-center flex-1">
            {/* ステップアイコン */}
            <div className="flex items-center w-full mb-4">
              <div
                className={cn(
                  'w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg',
                  {
                    'bg-green-600': step.status === 'completed',
                    'bg-primary': step.status === 'current',
                  },
                  step.status === 'upcoming' && 'timeline-step-icon-upcoming'
                )}
              >
                {step.icon || index + 1}
              </div>

              {/* 接続線 */}
              {index < steps.length - 1 && (
                <div
                  className={cn(
                    'flex-1 h-0.5 mx-4',
                    {
                      'bg-green-600': step.status === 'completed',
                    },
                    step.status !== 'completed' && 'timeline-connector-upcoming'
                  )}
                />
              )}
            </div>

            {/* ステップ内容 */}
            <div className="text-center">
              <h3 className="font-serif text-lg font-semibold text-neutral-900 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {step.description}
              </p>
              {step.details && <div className="mt-4">{step.details}</div>}
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className={cn('space-y-8', className)}>
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-start">
          {/* ステップ番号・アイコン */}
          <div className="flex flex-col items-center mr-6">
            <div
              className={cn(
                'w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0',
                {
                  'bg-green-600': step.status === 'completed',
                  'bg-primary': step.status === 'current',
                },
                step.status === 'upcoming' && 'timeline-step-icon-upcoming'
              )}
            >
              {step.status === 'completed' ? (
                <CheckCircle className="w-6 h-6" />
              ) : (
                step.icon || index + 1
              )}
            </div>

            {/* 接続線 */}
            {index < steps.length - 1 && (
              <div
                className={cn(
                  'w-0.5 h-16 mt-4',
                  {
                    'bg-green-600': step.status === 'completed',
                  },
                  step.status !== 'completed' && 'timeline-connector-upcoming'
                )}
              />
            )}
          </div>

          {/* ステップ内容 */}
          <div className="flex-1 pt-2">
            <h3 className="font-serif text-xl font-semibold text-neutral-900 mb-2">
              {step.title}
            </h3>
            <p className="text-neutral-700 leading-relaxed mb-4">
              {step.description}
            </p>
            {step.details && (
              <div className="bg-surface p-4 rounded-lg">{step.details}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

// シンプルなステップコンポーネント（水平レイアウト専用）
interface StepItem {
  number: number
  title: string
  description: string
}

interface StepsProps {
  steps: StepItem[]
  className?: string
}

export function Steps({ steps, className }: StepsProps) {
  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-3 gap-8', className)}>
      {steps.map(step => (
        <div key={step.number} className="text-center">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
            {step.number}
          </div>
          <h3 className="font-serif text-xl font-bold text-neutral-900 mb-4">
            {step.title}
          </h3>
          <p className="text-neutral-700 leading-relaxed">{step.description}</p>
        </div>
      ))}
    </div>
  )
}
