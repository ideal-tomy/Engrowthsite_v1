'use client'

import dynamic from 'next/dynamic'
import { Skeleton } from '@/components/ui/skeleton'

// ローディングスケルトン
function DiagramSkeleton() {
  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="text-center mb-12">
        <Skeleton className="h-10 w-96 mx-auto mb-4" />
        <Skeleton className="h-6 w-2/3 mx-auto" />
      </div>
      <div className="space-y-8">
        <Skeleton className="h-64 w-full rounded-xl" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-32 w-full rounded-xl" />
          ))}
        </div>
        <Skeleton className="h-48 w-full rounded-xl" />
      </div>
    </div>
  )
}

// 図解コンポーネントの動的インポート (next/dynamic を使用)
export const LazyBusinessCalendar = dynamic(
  () => import('./business-calendar').then(module => module.BusinessCalendar),
  {
    ssr: false,
    loading: () => <DiagramSkeleton />,
  }
)

export const LazyAIFeedbackLoop = dynamic(
  () => import('./ai-feedback-loop').then(module => module.AIFeedbackLoop),
  {
    ssr: false,
    loading: () => <DiagramSkeleton />,
  }
)

export const LazySocialImpactDiagram = dynamic(
  () =>
    import('./social-impact-diagram').then(
      module => module.SocialImpactDiagram
    ),
  {
    ssr: false,
    loading: () => <DiagramSkeleton />,
  }
)

export const LazyEcosystemDiagram = dynamic(
  () => import('./ecosystem-diagram').then(module => module.EcosystemDiagram),
  {
    ssr: false,
    loading: () => <DiagramSkeleton />,
  }
)

export const LazySimpleEcosystemFlow = dynamic(
  () =>
    import('./ecosystem-diagram').then(module => module.SimpleEcosystemFlow),
  {
    ssr: false,
    loading: () => <DiagramSkeleton />,
  }
)
