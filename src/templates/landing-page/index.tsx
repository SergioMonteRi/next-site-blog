import { CallToAction, CustomerStory, Feature, Hero, Support } from './sections'

export const LandingPage = () => {
  return (
    <article className="flex flex-col bg-gray-700">
      <Hero />
      <Feature />
      <Support />
      <CustomerStory />
      <CallToAction />
    </article>
  )
}
