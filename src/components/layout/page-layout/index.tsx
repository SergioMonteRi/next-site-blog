import { Header } from '../header'

type PageLayoutProps = {
  children: React.ReactNode
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="relative flex min-h-screen flex-col bg-zinc-900">
      <Header />

      <main className="mb-12 flex flex-1 flex-col">{children}</main>
    </div>
  )
}
