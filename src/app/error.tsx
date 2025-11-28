'use client'

import { CircleX } from 'lucide-react'
import { useEffect } from 'react'

import { Button } from '@/components'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6 bg-gray-600 px-4 py-10">
      <CircleX className="h-6 w-6 text-gray-200" />

      <p className="max-w-md border-b border-t border-red-300/50 py-4 text-center text-sm/10 text-gray-200">
        {error.message}
      </p>

      <Button
        variant="outline"
        onClick={() => reset()}
        className="w-fit text-gray-200"
      >
        <span className="text-action-sm text-gray-200">Tentar novamente</span>
      </Button>
    </div>
  )
}
