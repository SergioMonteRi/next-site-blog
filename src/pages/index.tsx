import { CustomerStory, Feature, Hero, Support } from '@/components'

export default function Home() {
  return (
    <>
      <article className="flex flex-col bg-gray-700">
        <Hero />
        <Feature />
        <Support />
        <CustomerStory />
      </article>
    </>
  )
}
