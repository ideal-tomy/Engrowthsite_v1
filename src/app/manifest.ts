import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Engrowth - 循環型エコシステムによる英語コンサルティング',
    short_name: 'Engrowth',
    description:
      '第二言語として英語を習得した日本人コンサルによる実践的な英語学習支援',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#d70207',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['education', 'business', 'productivity'],
    lang: 'ja',
    orientation: 'portrait-primary',
  }
}
