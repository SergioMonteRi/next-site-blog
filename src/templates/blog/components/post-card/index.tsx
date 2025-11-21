import Image from 'next/image'
import Link from 'next/link'

interface Author {
  name: string
  avatar: string
}

interface PostCardProps {
  title: string
  slug: string
  description: string
  date: string
  image: string
  author: Author
}

export const PostCard = (props: PostCardProps) => {
  const { title, slug, description, date, image, author } = props

  const formattedDate = new Date(date).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })

  return (
    <Link href={`/blog/${slug}`} className="w-full max-w-2xl">
      <div className="space-y-2 rounded-xl border border-gray-400 bg-gray-600 p-2 transition-all duration-300 hover:border-blue-300">
        <div className="relative">
          <div className="absolute right-0 top-0 rounded-bl-md bg-gray-600 px-3 py-1">
            <span className="text-body-xs text-gray-300">{formattedDate}</span>
          </div>

          <Image
            src={image}
            alt="Post"
            width={288}
            height={144}
            className="h-40 w-full rounded-md object-cover object-center"
          />
        </div>

        <div className="space-y-3 p-2">
          <div className="space-y-2">
            <h3 className="text-heading-sm text-gray-100">{title}</h3>

            <p className="line-clamp-2 text-body-sm text-gray-300">
              {description}
            </p>
          </div>

          <div className="flex items-center gap-2 border-t border-gray-400 pt-3">
            <Image
              src={author?.avatar}
              alt="Post"
              width={20}
              height={20}
              className="rounded-full border border-blue-200 object-cover object-center"
            />

            <span className="text-body-sm text-gray-300">{author?.name}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
