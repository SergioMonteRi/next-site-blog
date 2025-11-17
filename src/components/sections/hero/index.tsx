import { ArrowRight, Clock, Store } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui'

export const Hero = () => {
  return (
    <section className="container relative flex items-center justify-center p-8">
      <div className="grid min-h-[20rem] grid-cols-1 items-center gap-8 md:h-[36rem] md:grid-cols-2">
        <div className="flex flex-col items-center justify-center gap-6 md:items-start">
          <h1 className="text-center text-heading-hg text-gray-100 md:text-left">
            Venda seus produtos como afiliado em um único lugar
          </h1>

          <div className="p flex flex-col items-center justify-center gap-10 md:items-start">
            <div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-cyan-100" />
                <span className="text-gray-200">
                  Crie seu site em menos de 5 minutos
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Store className="h-4 w-4 text-cyan-100" />
                <span className="text-gray-200">
                  Acompanhe e otimize seu negócio online
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 text-white md:items-start">
              <Button className="w-fit rounded-full" asChild>
                <Link href="/create-store">
                  Criar loja grátis
                  <ArrowRight />
                </Link>
              </Button>

              <p className="text-body-xs text-gray-300">
                Não precisa de cartão de crédito
              </p>
            </div>
          </div>
        </div>

        <div className="relative order-first hidden h-[20rem] items-center justify-center md:order-last md:flex md:h-full">
          <Image
            src="/hero-section.svg"
            alt="Hero section"
            width={200}
            height={400}
            className="h-full w-auto object-contain"
          />
        </div>
      </div>
    </section>
  )
}
