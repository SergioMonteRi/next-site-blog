import Link from 'next/link'
import { useRouter } from 'next/router'

import { Button } from '@/components'
import { cn } from '@/lib/utils'

export const Header = () => {
  const router = useRouter()

  const isActive = (href: string, mode: 'exact' | 'prefix' = 'exact') =>
    mode === 'exact' ? router.pathname === href : router.asPath.startsWith(href)

  const navItems: Array<{
    href: string
    label: string
    mode?: 'exact' | 'prefix'
  }> = [
    { href: '/', label: 'Início', mode: 'exact' },
    { href: '/blog', label: 'Blog', mode: 'prefix' },
  ]

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-zinc-900/95 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/95">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-gray-100">
            Logo
          </Link>

          <nav className="flex items-center gap-6">
            {navItems.map(({ href, label, mode }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  'text-sm font-medium text-gray-100 transition-colors hover:text-blue-500',
                  isActive(href, mode)
                    ? 'text-blue-500'
                    : 'text-muted-foreground',
                )}
              >
                {label}
              </Link>
            ))}
            <Button variant="secondary">Começar</Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
