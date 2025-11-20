import { SearchInput } from '@/components'

export default function Blog() {
  return (
    <div className="flex h-full flex-grow flex-col bg-gray-700 p-8 py-20 md:py-24">
      <header>
        <div className="container flex flex-col items-start justify-between space-y-6 md:flex-row md:items-end">
          <div className="flex flex-col gap-4 md:px-0">
            <span className="w-fit rounded-md bg-cyan-300 px-8 py-2 text-center text-body-tag text-cyan-100 md:text-left">
              Blog
            </span>

            <h1 className="max-w-2xl text-balance text-start text-heading-lg text-gray-100 md:text-left md:text-heading-xl">
              Dicas e estratégias para impulsionar seu negócio
            </h1>
          </div>

          <SearchInput />
        </div>
      </header>
    </div>
  )
}
