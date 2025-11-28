import Image from 'next/image'
import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

import { cn } from '@/lib/utils'

const avatarImageVariants = tv({
  base: 'relative overflow-hidden rounded-full border border-blue-300',

  variants: {
    size: {
      small: 'h-5 w-5',
      medium: 'h-9 w-9',
    },
  },
  defaultVariants: {
    size: 'small',
  },
})

type AvatarContainerProps = ComponentProps<'div'>

type AvatarContentProps = ComponentProps<'div'>

type AvatarDescriptionProps = ComponentProps<'span'>

type AvatarImageProps = ComponentProps<typeof Image> &
  VariantProps<typeof avatarImageVariants>

type AvatarTitleProps = ComponentProps<'span'>

function AvatarRoot({ children }: AvatarContainerProps) {
  return <div className="flex items-center gap-3">{children}</div>
}

function AvatarContent({ children }: AvatarContentProps) {
  return <div className="flex flex-col">{children}</div>
}

function AvatarTitle({ children, className, ...rest }: AvatarTitleProps) {
  return (
    <span {...rest} className={cn('text-xs text-gray-200', className)}>
      {children}
    </span>
  )
}

function AvatarDescription({ children }: AvatarDescriptionProps) {
  return <span className="text-body-xs text-gray-300">{children}</span>
}

function AvatarImage({ src, alt, size = 'small', ...rest }: AvatarImageProps) {
  return (
    <div className={avatarImageVariants({ size })}>
      <Image
        {...rest}
        src={src}
        alt={alt}
        sizes="100%"
        className="object-cover"
        fill
      />
    </div>
  )
}

export const Avatar = {
  Root: AvatarRoot,
  Content: AvatarContent,
  Description: AvatarDescription,
  Image: AvatarImage,
  Title: AvatarTitle,
}
