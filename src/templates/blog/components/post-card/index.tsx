import Image from 'next/image'
import Link from 'next/link'

export const PostCard = () => {
  return (
    <Link
      href="/blog/"
      className="w-full max-w-2xl rounded-xl border border-gray-400 bg-gray-600 transition-all duration-300 hover:border-blue-300"
    >
      <div className="space-y-2 p-2">
        <div className="relative">
          <div className="absolute right-0 top-0 rounded-bl-md bg-gray-600 px-3 py-1">
            <span className="text-body-xs text-gray-300">20/12/2025</span>
          </div>

          <Image
            src="/assets/first-post.png"
            alt="Post"
            width={288}
            height={144}
            className="h-40 w-full rounded-xl object-cover object-center"
          />
        </div>

        <div className="space-y-3 p-2">
          <div className="space-y-2">
            <h3 className="text-heading-sm text-gray-100">
              Transformando seu negócio em uma loja virtual
            </h3>

            <p className="text-body-sm text-gray-300">
              Se você está buscando uma maneira simples e eficaz de vender seus
              produtos online, o Site.Set é a solução perfeita para você.
            </p>
          </div>

          <div className="flex items-center gap-2 border-t border-gray-400 pt-3">
            <Image
              src="/customer-avatar-01.png"
              alt="Post"
              width={20}
              height={20}
              className="rounded-full border border-blue-200 object-cover object-center"
            />

            <span className="text-body-sm text-gray-300">Aspen Dokidis</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
