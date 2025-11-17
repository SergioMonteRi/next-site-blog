import Link from 'next/link'

import { ActiveLink, Button } from '@/components'

export const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-zinc-900/95 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/95">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-gray-100">
            Logo
          </Link>

          <nav className="flex items-center gap-6">
            <ActiveLink href="/">Início</ActiveLink>
            <ActiveLink href="/blog">Blog</ActiveLink>

            <Button variant="secondary" asChild>
              <Link href="/sign-in">Começar</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
