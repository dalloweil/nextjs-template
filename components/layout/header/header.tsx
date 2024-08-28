"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/button/button";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import styles from "./header.module.css";

export default function Header() {
  const [mobileNavShown, setMobileNavShown] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);

  const toggle = () => setMobileNavShown(!mobileNavShown);

  useEffect(() => {
    const handlerResize = () => setIsMobile(window.innerWidth <= 768);

    window.addEventListener("resize", handlerResize);
    return () => window.removeEventListener("resize", handlerResize);
  }, [isMobile]);
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <Image src="/vercel.svg" alt="Logo company" width={90} height={18} />
        </Link>

        {!isMobile && (
          <>
            <nav className={styles.navbar}>
              <Link title="About" href="/about">
                About
              </Link>
              <Link title="Github Link" href="/about">
                Github
              </Link>
            </nav>

            <Button role="link" href="/about">
              <span>Sobre</span>
            </Button>
          </>
        )}

        <span className={styles.toggle} onClick={toggle}>
          <Menu height={32} width={32} />
        </span>
      </header>

      <nav
        className={`${styles.mobileNav} ${mobileNavShown ? styles.active : ""}`}
      >
        <Link title="About" href="/about">
          About
        </Link>
        <Link title="Github Link" href="/about">
          Github
        </Link>
      </nav>
    </>
  );
}
