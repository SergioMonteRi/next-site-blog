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
        'relative flex min-h-screen flex-col bg-zinc-900',
        inter.className,
      )}
    >
      <Header />

      <main className="mb-12 flex flex-1 flex-col">{children}</main>

      <Footer />
    </div>
  )
}
