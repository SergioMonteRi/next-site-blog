import { useRouter } from 'next/router'

import { SearchInput } from '@/components'

import { PostCard, PostGrid } from '../components'

export const BlogList = () => {
  const router = useRouter()
  const query = router.query.q as string
  const pageTitle = query
    ? `Resultados para "${query}"`
    : 'Dicas e estratégias para impulsionar seu negócio'

  return (
    <div className="flex h-full flex-grow flex-col bg-gray-700 p-8 py-20 md:py-24">
      <div className="container flex flex-col gap-6 md:gap-14">
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

        <PostGrid>
          <PostCard
            title="Transformando seu negócio em uma loja virtual"
            slug="transformando-seu-negocio-em-uma-loja-virtual"
            description="Se você está buscando uma maneira simples e eficaz de vender seus produtos online, o Site.Set é a solução perfeita para você. Criar uma loja virtual de sucesso nunca foi tão fácil. Com nossa plataforma intuitiva, você pode criar um site profissional para sua loja em minutos, sem precisar de conhecimentos técnicos."
            date="20/12/2025"
            image="/assets/first-post.png"
            author={{
              name: 'Aspen Dokidis',
              avatar: '/customer-avatar-01.png',
            }}
          />
          <PostCard
            title="Transformando seu negócio em uma loja virtual"
            slug="transformando-seu-negocio-em-uma-loja-virtual"
            description="Se você está buscando uma maneira simples e eficaz de vender seus produtos online, o Site.Set é a solução perfeita para você. Criar uma loja virtual de sucesso nunca foi tão fácil. Com nossa plataforma intuitiva, você pode criar um site profissional para sua loja em minutos, sem precisar de conhecimentos técnicos."
            date="20/12/2025"
            image="/assets/first-post.png"
            author={{
              name: 'Aspen Dokidis',
              avatar: '/customer-avatar-01.png',
            }}
          />
          <PostCard
            title="Transformando seu negócio em uma loja virtual"
            slug="transformando-seu-negocio-em-uma-loja-virtual"
            description="Se você está buscando uma maneira simples e eficaz de vender seus produtos online, o Site.Set é a solução perfeita para você. Criar uma loja virtual de sucesso nunca foi tão fácil. Com nossa plataforma intuitiva, você pode criar um site profissional para sua loja em minutos, sem precisar de conhecimentos técnicos."
            date="20/12/2025"
            image="/assets/first-post.png"
            author={{
              name: 'Aspen Dokidis',
              avatar: '/customer-avatar-01.png',
            }}
          />
          <PostCard
            title="Transformando seu negócio em uma loja virtual"
            slug="transformando-seu-negocio-em-uma-loja-virtual"
            description="Se você está buscando uma maneira simples e eficaz de vender seus produtos online, o Site.Set é a solução perfeita para você. Criar uma loja virtual de sucesso nunca foi tão fácil. Com nossa plataforma intuitiva, você pode criar um site profissional para sua loja em minutos, sem precisar de conhecimentos técnicos."
            date="20/12/2025"
            image="/assets/first-post.png"
            author={{
              name: 'Aspen Dokidis',
              avatar: '/customer-avatar-01.png',
            }}
          />
        </PostGrid>
      </div>
    </div>
  )
}
