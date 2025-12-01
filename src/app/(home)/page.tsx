import { Metadata } from 'next'

import { LandingPage } from '@/templates'

export const metadata: Metadata = {
  title: 'Site.set',
  description: 'Venda seus produtos como afiliado em um único lugar',
  robots: 'index, follow',
  openGraph: {
    title: 'Site.set',
    description: 'Venda seus produtos como afiliado em um único lugar',
    url: 'https://next-site-blog-jvo5c439i-sergiomonteris-projects.vercel.app/og-image.jpg',
    siteName: 'Site.set',
    locale: 'pt-BR',
    type: 'website',
    images: [
      {
        url: 'https://next-site-blog-jvo5c439i-sergiomonteris-projects.vercel.app/og-image.jpg',
        width: 800,
        height: 600,
        alt: 'Site.set',
      },
    ],
  },
}

export default function HomePage() {
  return <LandingPage />
}
