import { Facebook, Linkedin, Slack } from 'lucide-react'

interface ShareConfig {
  url: string
  title?: string
}

const SOCIAL_MEDIA_SHARE = {
  linkedin: {
    title: 'LinkedIn',
    icon: <Linkedin className="h-4 w-4 text-gray-100" strokeWidth={1.5} />,
    shareUrl: (config: ShareConfig) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        config.url,
      )}`,
  },
  facebook: {
    title: 'Facebook',
    icon: <Facebook className="h-4 w-4 text-gray-100" strokeWidth={1.5} />,
    shareUrl: (config: ShareConfig) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        config.url,
      )}`,
  },
  slack: {
    title: 'Slack',
    icon: <Slack className="h-4 w-4 text-gray-100" strokeWidth={1.5} />,
    shareUrl: (config: ShareConfig) =>
      `https://slack.com/share?url=${encodeURIComponent(
        config.url,
      )}&text=${encodeURIComponent(config.title || '')}`,
  },
}

export { SOCIAL_MEDIA_SHARE }
