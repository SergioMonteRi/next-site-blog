import { useCallback, useEffect, useState } from 'react'

interface UseClipboardProps {
  timeout: number
}

export const useClipboard = ({ timeout = 2000 }: UseClipboardProps) => {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = useCallback(async (text: string) => {
    if (!navigator.clipboard) return

    try {
      await navigator.clipboard.writeText(text)
      setIsCopied(true)
    } catch (error) {
      console.error('Error copying to clipboard', error)
    }
  }, [])

  useEffect(() => {
    if (isCopied) {
      const timeoutId = setTimeout(() => {
        setIsCopied(false)
      }, timeout)

      return () => clearTimeout(timeoutId)
    }
  }, [isCopied, timeout])

  return {
    isCopied,
    handleCopy,
  }
}
