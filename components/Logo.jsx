import Link from "next/link"
import Image from "next/image"



const Logo = () => {
  return (
    <Link href='/'>
      <Image src='/images/logo.png' width={54} height={54} alt='' priority />
    </Link>
  )
}

export default Logo
