import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'

import { cn } from '@/lib/utils'

type ActiveLinkProps = {
  children: React.ReactNode
} & LinkProps

export const ActiveLink = ({ href, children, ...rest }: ActiveLinkProps) => {
  const router = useRouter()

  console.log('router.asPath', router.asPath)
  console.log('href', href)
  console.log('rest.as', rest.as)

  const isCurrentPath =
    router.asPath === href ||
    router.asPath === rest.as ||
    router.asPath.startsWith(String(rest.as))

  return (
    <Link
      {...rest}
      href={href}
      className={cn(
        'text-action-sm text-sm transition-colors hover:text-blue-200',
        isCurrentPath ? 'text-blue-200' : 'text-gray-100',
      )}
    >
      {children}
    </Link>
  )
}
