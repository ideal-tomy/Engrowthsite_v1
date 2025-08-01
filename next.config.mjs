import bundleAnalyzer from '@next/bundle-analyzer'

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // バンドルサイズ最適化のためのパッケージインポート最適化
    optimizePackageImports: ['lucide-react', 'framer-motion'],
    // Web Vitals対応
    webVitalsAttribution: ['CLS', 'LCP'],
  },
  images: {
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      // 必要に応じて外部画像ドメインを追加
    ],
  },
  typescript: {
    // 本番ビルド時もTypeScriptエラーでビルドを停止
    ignoreBuildErrors: false,
  },
  eslint: {
    // 本番ビルド時もESLintエラーでビルドを停止
    ignoreDuringBuilds: false,
  },
  // 本番ビルドでのソースマップ生成を無効化（パフォーマンス向上）
  productionBrowserSourceMaps: false,
  // 静的最適化の設定
  poweredByHeader: false,
  // セキュリティヘッダー
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; connect-src 'self';",
          },
        ],
      },
    ]
  },
}

export default withBundleAnalyzer(nextConfig) 