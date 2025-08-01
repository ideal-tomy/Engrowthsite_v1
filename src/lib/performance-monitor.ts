// パフォーマンス監視ユーティリティ

interface LayoutShift extends PerformanceEntry {
  value: number
  hadRecentInput: boolean
}

export interface PerformanceMetrics {
  name: string
  value: number
  rating: 'good' | 'needs-improvement' | 'poor'
  id: string
}

export function getWebVitalsThresholds() {
  return {
    LCP: { good: 2500, poor: 4000 }, // Largest Contentful Paint
    FID: { good: 100, poor: 300 }, // First Input Delay
    CLS: { good: 0.1, poor: 0.25 }, // Cumulative Layout Shift
    FCP: { good: 1800, poor: 3000 }, // First Contentful Paint
    TTFB: { good: 800, poor: 1800 }, // Time to First Byte
  }
}

export function getRating(
  name: string,
  value: number
): 'good' | 'needs-improvement' | 'poor' {
  const thresholds = getWebVitalsThresholds()
  const threshold = thresholds[name as keyof typeof thresholds]

  if (!threshold) return 'good'

  if (value <= threshold.good) return 'good'
  if (value <= threshold.poor) return 'needs-improvement'
  return 'poor'
}

export function logPerformanceMetric(metric: PerformanceMetrics) {
  // 開発環境でのログ出力
  if (process.env.NODE_ENV === 'development') {
    const emoji = {
      good: '✅',
      'needs-improvement': '⚠️',
      poor: '❌',
    }[metric.rating]

    // eslint-disable-next-line no-console
    console.log(`${emoji} ${metric.name}: ${metric.value}ms (${metric.rating})`)
  }
}

// Core Web Vitals チェック関数
export function checkCoreWebVitals() {
  if (typeof window === 'undefined') return

  // LCP監視
  new PerformanceObserver(list => {
    const entries = list.getEntries()
    const lastEntry = entries[entries.length - 1]

    logPerformanceMetric({
      name: 'LCP',
      value: lastEntry.startTime,
      rating: getRating('LCP', lastEntry.startTime),
      id: 'lcp-check',
    })
  }).observe({ entryTypes: ['largest-contentful-paint'] })

  // CLS監視
  new PerformanceObserver(list => {
    let clsValue = 0
    for (const entry of list.getEntries()) {
      const layoutShiftEntry = entry as LayoutShift
      if (!layoutShiftEntry.hadRecentInput) {
        clsValue += layoutShiftEntry.value
      }
    }

    logPerformanceMetric({
      name: 'CLS',
      value: clsValue,
      rating: getRating('CLS', clsValue),
      id: 'cls-check',
    })
  }).observe({ entryTypes: ['layout-shift'] })
}

// バンドルサイズ監視
export function checkBundleSize() {
  if (typeof window === 'undefined') return

  const observer = new PerformanceObserver(list => {
    for (const entry of list.getEntries()) {
      if (entry.name.includes('_next/static/chunks/')) {
        const resourceEntry = entry as PerformanceResourceTiming
        const size = resourceEntry.transferSize || 0
        if (size > 244 * 1024) {
          // 244KB以上で警告
          // eslint-disable-next-line no-console
          console.warn(
            `⚠️ Large bundle detected: ${entry.name} (${(size / 1024).toFixed(1)}KB)`
          )
        }
      }
    }
  })

  observer.observe({ entryTypes: ['resource'] })
}
