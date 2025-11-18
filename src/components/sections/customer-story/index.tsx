import { PT_Sans_Caption } from 'next/font/google'
import Image from 'next/image'

import { cn } from '@/lib/utils'

const ptSansCaption = PT_Sans_Caption({
  subsets: ['latin'],
  weight: ['700'],
})

const CUSTOMER_STORIES = [
  {
    id: 1,
    author: 'Annette Bones',
    role: 'CEO na Anne Corp',
    avatar: '/customer-avatar-01.png',
    description:
      'Criar minha loja com o site.set foi a melhor decisão para o meu negócio. A plataforma é super intuitiva, e consegui colocar meus produtos à venda em poucos minutos. A',
  },
  {
    id: 2,
    author: 'Jacob Jones',
    role: 'CEO na JJ Org',
    avatar: '/customer-avatar-02.png',
    description:
      'Transformar minha ideia em uma loja online foi fácil e rápido. Adorei as opções de personalização e a simplicidade para gerenciar os pedidos. Já vejo meus produtos alcançando mais pessoas!',
  },
]

export const CustomerStory = () => {
  return (
    <section className="container p-8 md:p-10">
      <div className="flex flex-col items-center gap-12">
        <h2
          className={cn(
            'text-balance text-center text-3xl/8 font-bold text-gray-100',
            ptSansCaption.className,
          )}
        >
          Quem utiliza, aprova!
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {CUSTOMER_STORIES.map((customerStory) => (
            <div
              key={customerStory.id}
              className="flex flex-col gap-8 rounded-lg bg-gray-500 p-6 md:p-12"
            >
              <p className="text-balance text-gray-200">
                {customerStory.description}
              </p>

              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image
                    src={customerStory.avatar}
                    alt={customerStory.author}
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col">
                  <strong className="text-sm text-gray-200">
                    {customerStory.author}
                  </strong>
                  <span className="text-xs text-gray-300">
                    {customerStory.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
