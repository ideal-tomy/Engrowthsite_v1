import { cn } from '@/lib/utils'
import {
  ArrowRight,
  Users,
  BookOpen,
  TrendingUp,
  Heart,
  RefreshCw,
} from 'lucide-react'

interface EcosystemDiagramProps {
  className?: string
  showLabels?: boolean
  animated?: boolean
}

export function EcosystemDiagram({
  className,
  showLabels = true,
  animated = true,
}: EcosystemDiagramProps) {
  return (
    <div className={cn('relative w-full max-w-4xl mx-auto p-8', className)}>
      <svg
        viewBox="0 0 800 600"
        className="w-full h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* 背景の円形フロー */}
        <circle
          cx="400"
          cy="300"
          r="250"
          stroke="#f5f5f5"
          strokeWidth="2"
          fill="none"
          className={animated ? 'animate-pulse' : ''}
        />

        {/* ステップ1: 英語を学ぶ */}
        <g>
          <circle
            cx="400"
            cy="80"
            r="60"
            fill="#f0f9ff"
            stroke="#3b82f6"
            strokeWidth="3"
          />
          <foreignObject x="340" y="50" width="120" height="60">
            <div className="flex flex-col items-center justify-center h-full">
              <BookOpen className="w-8 h-8 text-blue-600 mb-1" />
              {showLabels && (
                <span className="text-xs font-medium text-center">
                  英語を学ぶ
                </span>
              )}
            </div>
          </foreignObject>
        </g>

        {/* ステップ2: スキルアップ */}
        <g>
          <circle
            cx="640"
            cy="200"
            r="60"
            fill="#f0fdf4"
            stroke="#22c55e"
            strokeWidth="3"
          />
          <foreignObject x="580" y="170" width="120" height="60">
            <div className="flex flex-col items-center justify-center h-full">
              <TrendingUp className="w-8 h-8 text-green-600 mb-1" />
              {showLabels && (
                <span className="text-xs font-medium text-center">
                  実力向上
                </span>
              )}
            </div>
          </foreignObject>
        </g>

        {/* ステップ3: 教える側へ */}
        <g>
          <circle
            cx="640"
            cy="400"
            r="60"
            fill="#fef3c7"
            stroke="#f59e0b"
            strokeWidth="3"
          />
          <foreignObject x="580" y="370" width="120" height="60">
            <div className="flex flex-col items-center justify-center h-full">
              <Users className="w-8 h-8 text-amber-600 mb-1" />
              {showLabels && (
                <span className="text-xs font-medium text-center">
                  教える側へ
                </span>
              )}
            </div>
          </foreignObject>
        </g>

        {/* ステップ4: 収入獲得 */}
        <g>
          <circle
            cx="400"
            cy="520"
            r="60"
            fill="#f3e8ff"
            stroke="#a855f7"
            strokeWidth="3"
          />
          <foreignObject x="340" y="490" width="120" height="60">
            <div className="flex flex-col items-center justify-center h-full">
              <TrendingUp className="w-8 h-8 text-purple-600 mb-1" />
              {showLabels && (
                <span className="text-xs font-medium text-center">
                  収入獲得
                </span>
              )}
            </div>
          </foreignObject>
        </g>

        {/* ステップ5: 社会貢献 */}
        <g>
          <circle
            cx="160"
            cy="400"
            r="60"
            fill="#fce7f3"
            stroke="#ec4899"
            strokeWidth="3"
          />
          <foreignObject x="100" y="370" width="120" height="60">
            <div className="flex flex-col items-center justify-center h-full">
              <Heart className="w-8 h-8 text-pink-600 mb-1" />
              {showLabels && (
                <span className="text-xs font-medium text-center">
                  社会貢献
                </span>
              )}
            </div>
          </foreignObject>
        </g>

        {/* ステップ6: 循環継続 */}
        <g>
          <circle
            cx="160"
            cy="200"
            r="60"
            fill="#fee2e2"
            stroke="#ef4444"
            strokeWidth="3"
          />
          <foreignObject x="100" y="170" width="120" height="60">
            <div className="flex flex-col items-center justify-center h-full">
              <RefreshCw className="w-8 h-8 text-red-600 mb-1" />
              {showLabels && (
                <span className="text-xs font-medium text-center">
                  循環継続
                </span>
              )}
            </div>
          </foreignObject>
        </g>

        {/* 矢印 */}
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="7"
            refX="10"
            refY="3.5"
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill="#d70207" />
          </marker>
        </defs>

        {/* フロー矢印 */}
        <path
          d="M 460 120 Q 580 120 600 180"
          stroke="#d70207"
          strokeWidth="3"
          fill="none"
          markerEnd="url(#arrowhead)"
        />
        <path
          d="M 680 260 Q 680 330 680 360"
          stroke="#d70207"
          strokeWidth="3"
          fill="none"
          markerEnd="url(#arrowhead)"
        />
        <path
          d="M 580 440 Q 490 480 460 500"
          stroke="#d70207"
          strokeWidth="3"
          fill="none"
          markerEnd="url(#arrowhead)"
        />
        <path
          d="M 340 480 Q 250 480 200 440"
          stroke="#d70207"
          strokeWidth="3"
          fill="none"
          markerEnd="url(#arrowhead)"
        />
        <path
          d="M 120 360 Q 120 280 120 240"
          stroke="#d70207"
          strokeWidth="3"
          fill="none"
          markerEnd="url(#arrowhead)"
        />
        <path
          d="M 200 160 Q 300 120 340 100"
          stroke="#d70207"
          strokeWidth="3"
          fill="none"
          markerEnd="url(#arrowhead)"
        />
      </svg>

      {/* 中央のコンセプト */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="bg-white border-4 border-primary rounded-xl p-6 text-center shadow-lg">
          <h3 className="font-serif text-xl font-bold text-primary mb-2">
            循環型エコシステム
          </h3>
          <p className="text-sm text-neutral-600">学ぶ→教える→成長</p>
        </div>
      </div>
    </div>
  )
}

// シンプル版（コンパクト表示用）
export function SimpleEcosystemFlow({ className }: { className?: string }) {
  const steps = [
    { icon: BookOpen, label: '学ぶ', color: 'text-blue-600' },
    { icon: TrendingUp, label: '成長', color: 'text-green-600' },
    { icon: Users, label: '教える', color: 'text-amber-600' },
    { icon: Heart, label: '貢献', color: 'text-pink-600' },
  ]

  return (
    <div className={cn('flex items-center justify-center gap-6', className)}>
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-2">
              <step.icon className={cn('w-8 h-8', step.color)} />
            </div>
            <span className="text-sm font-medium text-neutral-700">
              {step.label}
            </span>
          </div>
          {index < steps.length - 1 && (
            <ArrowRight className="w-6 h-6 text-primary mx-4" />
          )}
        </div>
      ))}
      <RefreshCw className="w-6 h-6 text-primary ml-4" />
    </div>
  )
}
