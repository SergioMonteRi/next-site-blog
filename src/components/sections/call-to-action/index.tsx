import { ArrowRight, Store } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui'

export const CallToAction = () => {
  return (
    <section className="relative bg-gradient-to-b from-cyan-950/20 to-gray-700 py-14 md:py-24">
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 rounded-full bg-cyan-300 p-4">
        <Store className="h-8 w-8 text-cyan-100" />
      </div>

      <div className="container flex flex-col items-center gap-8 md:gap-10">
        <h2 className="font-pt-sans-caption text-balance text-center text-2xl font-bold text-gray-100 md:max-w-[450px] md:text-3xl/8">
          Crie uma loja online e inicie suas vendas ainda hoje
        </h2>

        <Button variant="primary" asChild>
          <Link href="/create-store">
            Criar loja grátis
            <ArrowRight />
          </Link>
        </Button>
      </div>
    </section>
  )
}
