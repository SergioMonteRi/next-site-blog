'use client'

import { Button } from '@/components'
import { useSocialMediaShare } from '@/hooks'

interface SocialMediaShareProps {
  url: string
  title?: string
}

export const SocialMediaShare = ({ url, title }: SocialMediaShareProps) => {
  const { shareButtons } = useSocialMediaShare({
    url,
    title,
  })

  return (
    <div className="md:space-y-5">
      <h2 className="hidden text-heading-xs text-gray-100 lg:block">
        Compartilhar
      </h2>

      <div className="flex gap-2 lg:flex-col lg:gap-2">
        {shareButtons.map((button) => (
          <Button
            key={button.title}
            variant="outline"
            onClick={() => button.handleShare()}
            className="w-fit lg:w-full"
          >
            {button.icon}
            <span className="hidden text-action-sm text-gray-200 lg:block">
              {button.title}
            </span>
          </Button>
        ))}
      </div>
    </div>
  )
}
