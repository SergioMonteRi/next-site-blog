import { Terminal } from 'lucide-react'

interface NotFoundProps {
  message: string
}

export const NotFound = ({ message }: NotFoundProps) => {
  return (
    <div className="flex flex-1 items-center justify-center bg-gray-600 py-10">
      <Terminal className="h-6 w-6 text-gray-200" />

      <p className="ml-4 border-l border-gray-300/50 pl-4 text-sm/10 text-gray-200">
        {message}
      </p>
    </div>
  )
}
