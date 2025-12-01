import '@/styles/globals.css'

import { Metadata } from 'next'

import { PageLayout } from '@/components'

export const metadata: Metadata = {
  title: {
    template: '%s | Site.set',
    default: 'Site.set',
  },
  description: 'Venda seus produtos como afiliado em um único lugar',
  robots: 'index, follow',
  openGraph: {
    title: 'Site.set',
    description: 'Venda seus produtos como afiliado em um único lugar',
    url: 'https://next-site-blog.vercel.app/og-image.png',
    siteName: 'Site.set',
    locale: 'pt-BR',
    type: 'website',
    images: [
      {
        url: 'https://next-site-blog.vercel.app/og-image.png',
        width: 800,
        height: 600,
        alt: 'Site.set',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-zinc-900">
        <PageLayout>{children}</PageLayout>
      </body>
    </html>
  )
}
