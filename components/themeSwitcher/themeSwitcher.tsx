import { Moon, Sun } from "lucide-react";
import styles from "./themeSwitcher.module.css";

interface ThemeSwitcherProps {
  theme?: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export default function ThemeSwitcher({ theme, setTheme }: ThemeSwitcherProps) {
  return (
    <div className={styles.themeSwitcher} role="radiogroup">
      <button
        role="radio"
        aria-checked
        data-active={theme === "light"}
        onClick={() => setTheme("light")}
        className={styles.themeSwitch}
      >
        <Sun width={14} />
      </button>
      <button
        role="radio"
        aria-checked
        data-active={theme === "dark"}
        onClick={() => setTheme("dark")}
        className={styles.themeSwitch}
      >
        <Moon width={14} />
      </button>
    </div>
  );
}

