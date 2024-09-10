import { Monitor, Moon, Sun } from "lucide-react";
import styles from "./theme-switcher.module.css";

interface ThemeSwitcherProps {
  theme?: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export default function ThemeSwitcher({ theme, setTheme }: ThemeSwitcherProps) {
  return (
    <div className={styles.themeSwitcher} role="radiogroup">
      <button
        role="radio"
        aria-label="Switch to system theme"
        aria-checked
        data-active={theme === "system"}
        onClick={() => setTheme("system")}
        className={styles.themeSwitch}
      >
        <Monitor width={14} />
      </button>
      <button
        role="radio"
        aria-label="Switch to light theme"
        aria-checked
        data-active={theme === "light"}
        onClick={() => setTheme("light")}
        className={styles.themeSwitch}
      >
        <Sun width={14} />
      </button>
      <button
        role="radio"
        aria-label="Switch to dark theme"
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

