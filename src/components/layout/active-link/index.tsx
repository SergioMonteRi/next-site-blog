'use client'

import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'

type ActiveLinkProps = {
  children: React.ReactNode
} & LinkProps

export const ActiveLink = ({ href, children, ...rest }: ActiveLinkProps) => {
  const path = typeof href === 'string' ? href : href.pathname
  const pathname = usePathname()

  const isActivePath = pathname === path || pathname?.startsWith(`${path}/`)

  return (
    <Link
      {...rest}
      href={href}
      className={cn(
        'text-action-sm text-sm transition-colors hover:text-blue-200',
        isActivePath ? 'text-blue-200' : 'text-gray-100',
      )}
    >
      {children}
    </Link>
  )
}
