import type { AriaRole } from "react";
import { Archive } from "lucide-react";
import styles from "./button.module.css";

interface ButtonProps {
  role: AriaRole;
  href: string;
  tabIndex?: number;
  type?: string;
  children: React.ReactNode
}

export default function Button({
  role,
  href,
  tabIndex,
  type,
  children
}: ButtonProps) {
  return (
    <a
      role={role}
      href={href}
      tabIndex={tabIndex}
      className={styles.button}
      type={type}
    >
      {children}
    </a>
  );
}
