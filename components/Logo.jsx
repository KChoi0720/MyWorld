import Link from "next/link"
import Image from "next/image"



const Logo = () => {
  return (
    <Link href='/'>
      <Image src='/images/logo111.png' width={110} height={44} alt='' priority />
    </Link>
  )
}

export default Logo
