import { Feature, Hero } from '@/components'

export default function Home() {
  return (
    <>
      <article className="flex flex-col bg-gray-700">
        <Hero />
        <Feature />
      </article>
    </>
  )
}
