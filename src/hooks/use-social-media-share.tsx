import { Check, Copy } from 'lucide-react'
import { useCallback, useMemo } from 'react'

import { SOCIAL_MEDIA_SHARE } from '@/constants'

import { useClipboard } from './use-clipboard'

interface UseSocialMediaShareProps {
  url: string
  title?: string
  clipboardTimeout?: number
}

type PlatformShareOptions = keyof typeof SOCIAL_MEDIA_SHARE | 'clipboard'

export const useSocialMediaShare = ({
  url,
  title,
  clipboardTimeout = 2000,
}: UseSocialMediaShareProps) => {
  const { isCopied, handleCopy } = useClipboard({ timeout: clipboardTimeout })

  const shareConfig = useMemo(
    () => ({
      url,
      title,
    }),
    [url, title],
  )

  const handleShare = useCallback(
    (platform: PlatformShareOptions) => {
      try {
        if (platform === 'clipboard') {
          handleCopy(shareConfig.url)
          return
        }

        const shareUrl = SOCIAL_MEDIA_SHARE[platform].shareUrl(shareConfig)

        const shareWindow = window.open(
          shareUrl,
          '_blank',
          'width=500, height=500, location=yes, status=yes',
        )

        return !!shareWindow
      } catch (error) {
        console.error('Error sharing on platform', platform, error)
        return false
      }
    },
    [handleCopy, shareConfig],
  )

  console.log(isCopied)

  const shareButtons = useMemo(() => {
    return [
      ...Object.entries(SOCIAL_MEDIA_SHARE).map(([key, platform]) => ({
        title: platform.title,
        icon: platform.icon,
        handleShare: () => handleShare(key as PlatformShareOptions),
      })),
      {
        title: isCopied ? 'Link copiado' : 'Copiar link',
        icon: (
          <div className="relative h-4 w-4 overflow-hidden">
            {isCopied ? (
              <Check strokeWidth={1.5} className="text-gray-100" />
            ) : (
              <Copy strokeWidth={1.5} className="text-gray-100" />
            )}
          </div>
        ),
        handleShare: () => handleShare('clipboard'),
      },
    ]
  }, [handleShare, isCopied])

  return { shareButtons }
}
