import Image from 'next/image'
import Link from 'next/link'

export const Logo = () => {
  return (
    <Link href="/" title="Página inicial">
      <Image
        src="/logo.svg"
        alt="Logo"
        width={116}
        height={32}
        className="h-[32px] w-[116px]"
      />
    </Link>
  )
}
