import '@/styles/globals.css'

import { PageLayout } from '@/components'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-zinc-900">
        <PageLayout>{children}</PageLayout>
      </body>
    </html>
  )
}
