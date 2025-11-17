import { Inter } from 'next/font/google'

import { cn } from '@/lib/utils'

import { Footer } from '../footer'
import { Header } from '../header'

type PageLayoutProps = {
  children: React.ReactNode
}

const inter = Inter({
  subsets: ['latin'],
})

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div
      className={cn(
        'grid-rows-app-layout grid min-h-screen grid-flow-row bg-zinc-900',
        inter.className,
      )}
    >
      <Header />

      <main className="row-start-2 mb-12 flex flex-1 flex-col">{children}</main>

      <Footer />
    </div>
  )
}
