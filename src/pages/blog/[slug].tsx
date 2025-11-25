import { allPosts } from 'contentlayer/generated'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import {
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  Markdown,
} from '@/components'
import { formatDate } from '@/utils'

export default function BlogPost() {
  const router = useRouter()
  const slug = router.query.slug as string

  const post = allPosts.find((post) => post.slug === slug)

  const formattedDate = formatDate(post?.date)

  return (
    <main className="container h-full space-y-5 px-4 pb-20 pt-5 md:space-y-8 md:px-8 md:pb-32 md:pt-12">
      <div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link
                  href="/blog"
                  className="text-gray-100 transition-all duration-200 hover:text-gray-300"
                >
                  Blog
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator className="text-gray-300" />

            <BreadcrumbItem>
              <span className="text-action-sm text-blue-200">Post</span>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_250px] lg:gap-12">
        <article className="overflow-hidden rounded-lg border border-gray-400 bg-gray-600">
          <figure className="relative aspect-[16/10] max-h-32 w-full overflow-hidden rounded-tl-lg md:max-h-64">
            <Image
              src={post?.image ?? ''}
              alt={post?.title ?? ''}
              fill
              className="object-cover"
            />
          </figure>

          <div className="flex flex-col gap-8 p-6 pt-8 md:gap-12 md:p-16 md:pt-12">
            <header className="">
              <h1 className="mb-6 text-balance text-heading-md text-gray-100 md:text-heading-xl lg:text-heading-xl">
                {post?.title}
              </h1>

              <Avatar.Root>
                <Avatar.Image
                  src={post?.author.avatar ?? ''}
                  alt={post?.author.name ?? ''}
                  size="medium"
                />
                <Avatar.Content>
                  <Avatar.Title className="text-sm">
                    {post?.author.name}
                  </Avatar.Title>
                  <Avatar.Description>
                    Publicado em{' '}
                    <time dateTime={formattedDate}>{formattedDate}</time>
                  </Avatar.Description>
                </Avatar.Content>
              </Avatar.Root>
            </header>

            <div className="prose prose-invert max-w-none">
              <Markdown content={post?.body.raw ?? ''} />
            </div>
          </div>
        </article>
      </div>
    </main>
  )
}
