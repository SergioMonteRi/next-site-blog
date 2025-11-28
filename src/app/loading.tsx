import { Loader } from 'lucide-react'

export default function Loading() {
  return (
    <div className="m-10 flex flex-1 items-center justify-center rounded-2xl bg-gray-600/60">
      <Loader className="h-6 w-6 animate-[spin_1.5s_linear_infinite] text-gray-300" />
    </div>
  )
}
