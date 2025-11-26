import { Post } from 'contentlayer/generated'
import { Terminal } from 'lucide-react'
import { useRouter } from 'next/router'

import { CallToAction, SearchInput } from '@/components'

import { PostCard, PostGrid } from '../../components'

interface BlogListProps {
  posts: Post[]
}

export const BlogList = ({ posts }: BlogListProps) => {
  const router = useRouter()
  const query = router.query.q as string
  const pageTitle = query
    ? `Resultados para "${query}"`
    : 'Dicas e estratégias para impulsionar seu negócio'

  const filteredPosts = query
    ? posts.filter((post) =>
        post.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()),
      )
    : posts

  const hasPosts = filteredPosts.length > 0

  return (
    <>
      <div className="flex h-full flex-grow flex-col bg-gray-700 px-4 py-20 md:px-8 md:py-24">
        <div className="container flex flex-1 flex-col gap-6 md:gap-14">
          <header>
            <div className="flex flex-col items-start justify-between space-y-6 md:flex-row md:items-end">
              <div className="flex flex-col gap-4 md:px-0">
                <span className="w-fit rounded-md bg-cyan-300 px-8 py-2 text-center text-body-tag text-cyan-100 md:text-left">
                  Blog
                </span>

                <h1 className="max-w-2xl text-balance text-start text-heading-lg text-gray-100 md:text-left md:text-heading-xl">
                  {pageTitle}
                </h1>
              </div>

              <SearchInput />
            </div>
          </header>

          {hasPosts && (
            <PostGrid>
              {filteredPosts.map((post) => (
                <PostCard
                  key={post._id}
                  title={post.title}
                  slug={post.slug}
                  description={post.description}
                  date={post.date}
                  image={post.image}
                  author={{
                    name: post.author.name,
                    avatar: post.author?.avatar,
                  }}
                />
              ))}
            </PostGrid>
          )}

          {!hasPosts && (
            <div className="flex flex-1 items-center justify-center rounded-md bg-gray-600 py-10">
              <Terminal className="h-6 w-6 text-gray-200" />

              <p className="ml-4 border-l border-gray-300/50 pl-4 text-sm/10 text-gray-200">
                Nenhum post encontrado
              </p>
            </div>
          )}
        </div>
      </div>

      <CallToAction />
    </>
  )
}
