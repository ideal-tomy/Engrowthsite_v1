import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_APP_URL || 'https://engrowth.vercel.app'

  const routes = [
    '',
    '/business',
    '/students',
    '/ecosystem',
    '/method',
    '/flow',
    '/pricing',
    '/faq',
    '/contact',
  ]

  return routes.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))
}
