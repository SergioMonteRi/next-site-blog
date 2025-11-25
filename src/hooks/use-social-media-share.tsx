import { useCallback, useMemo } from 'react'

import { SOCIAL_MEDIA_SHARE } from '@/constants'

interface UseSocialMediaShareProps {
  url: string
  title?: string
  clipboardTimeout?: number
}

type PlatformShareOptions = keyof typeof SOCIAL_MEDIA_SHARE

export const useSocialMediaShare = ({
  url,
  title,
}: UseSocialMediaShareProps) => {
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
    [shareConfig],
  )

  const shareButtons = useMemo(() => {
    return Object.entries(SOCIAL_MEDIA_SHARE).map(([key, platform]) => ({
      title: platform.title,
      icon: platform.icon,
      handleShare: () => handleShare(key as PlatformShareOptions),
    }))
  }, [handleShare])

  return { shareButtons }
}
