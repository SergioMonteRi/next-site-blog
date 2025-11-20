import { Inter, PT_Sans_Caption } from 'next/font/google'

import { cn } from '@/lib/utils'

import { Footer } from '../footer'
import { Header } from '../header'

type PageLayoutProps = {
  children: React.ReactNode
}

const ptSansCaption = PT_Sans_Caption({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-sans-caption',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
})

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div
      className={cn(
        'grid min-h-screen grid-flow-row grid-rows-app-layout bg-zinc-900 font-inter font-normal',
        ptSansCaption.className,
        inter.className,
      )}
    >
      <Header />

      <main className="row-start-2 flex flex-1 flex-col">{children}</main>

      <Footer />
    </div>
  )
}
