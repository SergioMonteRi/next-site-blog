import { allPosts } from 'contentlayer/generated'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components'

export default function BlogPost() {
  const router = useRouter()
  const slug = router.query.slug as string

  const post = allPosts.find((post) => post.slug === slug)

  console.log(post)

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
          <figure className="relative aspect-[16/10] max-h-32 w-full overflow-hidden rounded-lg md:max-h-64">
            <Image
              src={post?.image}
              alt={post?.title}
              fill
              className="object-cover"
            />
          </figure>
        </article>
      </div>
    </main>
  )
}
