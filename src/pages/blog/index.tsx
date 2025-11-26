import { allPosts, Post } from 'contentlayer/generated'
import { GetStaticProps } from 'next'

import { BlogList } from '@/templates'

interface BlogProps {
  posts: Post[]
}

export default function Blog({ posts }: BlogProps) {
  return <BlogList posts={posts} />
}

export const getStaticProps = (async () => {
  const posts = allPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  return {
    props: {
      posts,
    },
  }
}) satisfies GetStaticProps
