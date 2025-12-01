import { allPosts } from 'contentlayer/generated'
import { Metadata } from 'next'

import { BlogList } from '@/templates'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Dicas e estratégias para impulsionar seu negócio',
  robots: 'index, follow',
  openGraph: {
    title: 'Blog | Site.set',
    description: 'Dicas e estratégias para impulsionar seu negócio',
    url: 'https://next-site-blog.vercel.app/og-image.png',
    siteName: 'Blog | Site.set',
    locale: 'pt-BR',
    type: 'website',
    images: [
      {
        url: 'https://next-site-blog.vercel.app/og-image.png',
        width: 800,
        height: 600,
        alt: 'Blog | Site.set',
      },
    ],
  },
}

export default function BlogPage() {
  const posts = allPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  return <BlogList posts={posts} />
}
