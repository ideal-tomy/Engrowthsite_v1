/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react'],
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
}

export default nextConfig 