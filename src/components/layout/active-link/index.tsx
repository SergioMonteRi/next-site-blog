import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'

import { cn } from '@/lib/utils'

type ActiveLinkProps = {
  children: React.ReactNode
} & LinkProps

export const ActiveLink = ({ href, children, ...rest }: ActiveLinkProps) => {
  const router = useRouter()

  console.log(router.asPath, rest.as)

  const isCurrentPath =
    router.asPath === href ||
    router.asPath === rest.as ||
    router.asPath.startsWith(String(rest.as))

  return (
    <Link
      {...rest}
      href={href}
      className={cn(
        'text-sm font-medium text-gray-100 transition-colors hover:text-blue-500',
        isCurrentPath ? 'text-blue-500' : 'text-muted-foreground',
      )}
    >
      {children}
    </Link>
  )
}
