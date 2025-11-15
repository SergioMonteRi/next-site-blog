import { Button } from '@/components'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-zinc-500">
      <h2 className="text-4xl font-bold uppercase text-white">
        Hello, Next.js
      </h2>

      <Button variant="outline">Click me</Button>
    </div>
  )
}
