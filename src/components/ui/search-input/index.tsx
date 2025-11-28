'use client'

import { CircleX, SearchIcon } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'

import { cn } from '@/lib/utils'

export const SearchInput = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const query = searchParams?.get('q') as string

  const handleSearch = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      if (query.trim()) {
        router.push(`/blog?q=${query}`)
      }
    },
    [router, query],
  )

  const handleQueryChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newQuery = event?.target.value

      if (!newQuery) {
        router.push('/blog')
        return
      }

      router.push(`/blog?q=${newQuery}`)
    },
    [router],
  )

  const handleClearQuery = useCallback(() => {
    router.push('/blog')
  }, [router])

  return (
    <form
      onSubmit={handleSearch}
      className="group flex w-full items-center gap-x-3 rounded-md border border-gray-400 bg-gray-500 px-4 focus-within:border-blue-300 focus-within:ring-1 focus-within:ring-blue-300 md:max-w-72"
    >
      <SearchIcon
        className={cn(
          'h-4 w-4 text-gray-300 group-focus-within:text-blue-200',
          query && 'text-blue-200',
        )}
      />

      <input
        type="text"
        value={query || ''}
        placeholder="Buscar"
        className="h-10 flex-1 bg-transparent text-body-sm text-gray-100 outline-none transition-all duration-200 placeholder:text-body-sm placeholder:text-gray-300"
        onChange={handleQueryChange}
      />

      {query && (
        <CircleX
          onClick={handleClearQuery}
          className="h-4 w-4 cursor-pointer text-gray-300 transition-all duration-200 hover:text-gray-200"
        />
      )}
    </form>
  )
}
