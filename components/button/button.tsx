import type { AriaRole } from "react";
import styles from "./button.module.css";

interface ButtonProps {
  role?: AriaRole;
  href?: string;
  type?: string;
  children: React.ReactNode
  onClick?: () => void;
}

export function Button({
  role,
  href,
  type,
  children,
  onClick,
}: ButtonProps) {
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

interface SubmitButtonProps extends ButtonProps {
  type?: "submit" | "reset" | "button";
  disabled: boolean
}

export function SubmitButton({
  type,
  children,
  onClick,
  disabled
}: SubmitButtonProps) {
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
