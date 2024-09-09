import Image from "next/image"

interface LogoProps {
  theme: string | undefined
}

export default function Logo({ theme }: LogoProps) {
  return <Image src={theme === "dark" ? "/white-logo.svg" : "/black-logo.svg"} alt="Dalloweil company logo" width={90} height={18} />
}
