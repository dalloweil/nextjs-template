import type { AriaRole } from "react";
import styles from "./button.module.css";

interface ButtonLinkProps {
  role?: AriaRole;
  href?: string;
  type?: string;
  children: React.ReactNode
  onClick?: () => void;
}

export function ButtonLink({
  role,
  href,
  type,
  children,
  onClick,
}: ButtonLinkProps) {
  return (
    <a
      role={role}
      href={href}
      className={styles.button}
      type={type}
      onClick={onClick}
    >
      <span>
        {children}
      </span>
    </a>
  );
}

interface ButtonProps extends ButtonLinkProps {
  type?: "submit" | "reset" | "button";
  disabled?: boolean
}

export function Button({
  type,
  children,
  onClick,
  disabled
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      className={styles.button}
      type={type}
      onClick={onClick}
    >
      <span>
        {children}
      </span>
    </button>
  );
}
