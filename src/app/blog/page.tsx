import { allPosts } from 'contentlayer/generated'

import { BlogList } from '@/templates'

export default function BlogPage() {
  const posts = allPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  return <BlogList posts={posts} />
}
