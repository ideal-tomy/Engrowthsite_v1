'use client'

import { useReportWebVitals } from 'next/web-vitals'
import { useEffect } from 'react'
import {
  logPerformanceMetric,
  getRating,
  checkCoreWebVitals,
  checkBundleSize,
} from '@/lib/performance-monitor'

export function WebVitals() {
  useReportWebVitals(metric => {
    // パフォーマンスメトリクスのログ出力
    logPerformanceMetric({
      name: metric.name,
      value: metric.value,
      rating: getRating(metric.name, metric.value),
      id: metric.id,
    })

    // 本番環境では分析サービスに送信
    if (process.env.NODE_ENV === 'production') {
      // Google Analytics や他の分析サービスに送信
      if (typeof window !== 'undefined' && 'gtag' in window) {
        const gtag = (window as { gtag?: (...args: unknown[]) => void }).gtag
        if (gtag) {
          gtag('event', metric.name, {
            event_category: 'Web Vitals',
            value: Math.round(
              metric.name === 'CLS' ? metric.value * 1000 : metric.value
            ),
            event_label: metric.id,
            non_interaction: true,
          })
        }
      }
    }
  })

  useEffect(() => {
    // パフォーマンス監視の初期化
    checkCoreWebVitals()
    checkBundleSize()
  }, [])

  return null
}
