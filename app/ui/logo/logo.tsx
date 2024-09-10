import Image from "next/image"
import { useTheme } from "next-themes"

export default function Logo() {
  const { theme, systemTheme } = useTheme();
  const appliedTheme = theme === "system" ? systemTheme : theme;
  return <Image src={appliedTheme === "dark" ? "/white-logo.svg" : "/black-logo.svg"} priority alt="Dalloweil company logo" width={90} height={18} />
}
