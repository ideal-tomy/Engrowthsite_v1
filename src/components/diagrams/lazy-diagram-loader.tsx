'use client'

import { Suspense, lazy } from 'react'
import { Skeleton } from '@/components/ui/skeleton'

// 図解コンポーネントの動的インポート
const BusinessCalendar = lazy(() =>
  import('./business-calendar').then(module => ({
    default: module.BusinessCalendar,
  }))
)

const AIFeedbackLoop = lazy(() =>
  import('./ai-feedback-loop').then(module => ({
    default: module.AIFeedbackLoop,
  }))
)

const SocialImpactDiagram = lazy(() =>
  import('./social-impact-diagram').then(module => ({
    default: module.SocialImpactDiagram,
  }))
)

const EcosystemDiagram = lazy(() =>
  import('./ecosystem-diagram').then(module => ({
    default: module.EcosystemDiagram,
  }))
)

const SimpleEcosystemFlow = lazy(() =>
  import('./ecosystem-diagram').then(module => ({
    default: module.SimpleEcosystemFlow,
  }))
)

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

// Lazy Wrapper コンポーネント
interface LazyDiagramProps {
  className?: string
}

export function LazyBusinessCalendar({ className }: LazyDiagramProps) {
  return (
    <Suspense fallback={<DiagramSkeleton />}>
      <BusinessCalendar className={className} />
    </Suspense>
  )
}

export function LazyAIFeedbackLoop({ className }: LazyDiagramProps) {
  return (
    <Suspense fallback={<DiagramSkeleton />}>
      <AIFeedbackLoop className={className} />
    </Suspense>
  )
}

export function LazySocialImpactDiagram({ className }: LazyDiagramProps) {
  return (
    <Suspense fallback={<DiagramSkeleton />}>
      <SocialImpactDiagram className={className} />
    </Suspense>
  )
}

export function LazyEcosystemDiagram({ className }: LazyDiagramProps) {
  return (
    <Suspense fallback={<DiagramSkeleton />}>
      <EcosystemDiagram className={className} />
    </Suspense>
  )
}

export function LazySimpleEcosystemFlow({ className }: LazyDiagramProps) {
  return (
    <Suspense fallback={<DiagramSkeleton />}>
      <SimpleEcosystemFlow className={className} />
    </Suspense>
  )
}
