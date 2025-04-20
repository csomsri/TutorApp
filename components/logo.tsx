import Image from "next/image"
import Link from "next/link"

export default function Logo() {
  return (
    <Link href="/">
      <div className="bg-emerald-700 w-16 h-16 flex items-center justify-center rounded-md overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AScend%20logo-Yh45nPHFVlOabATdw6mBH04eYXAziP.png"
          alt="AScend Logo"
          width={64}
          height={64}
          className="object-cover"
        />
      </div>
    </Link>
  )
}
