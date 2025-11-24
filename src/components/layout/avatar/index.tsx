import Image from 'next/image'
import { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

interface AvatarContainerProps {
  children: React.ReactNode
}

interface AvatarContentProps {
  children: React.ReactNode
}

interface AvatarDescriptionProps {
  children: React.ReactNode
}

type AvatarImageProps = ComponentProps<typeof Image>

type AvatarTitleProps = ComponentProps<'span'> & {
  children: React.ReactNode
}

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

function AvatarImage({
  src,
  alt,
  width = 40,
  height = 40,
  ...rest
}: AvatarImageProps) {
  return <Image {...rest} src={src} alt={alt} width={width} height={height} />
}

export const Avatar = {
  Root: AvatarRoot,
  Content: AvatarContent,
  Description: AvatarDescription,
  Image: AvatarImage,
  Title: AvatarTitle,
}
