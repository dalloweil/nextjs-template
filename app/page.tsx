import styles from "./page.module.css";
import Grid from "@/components/grid/grid";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Start building with our template</h1>
        <p className={styles.description}>
          Get started with our template, which includes dark and light themes, internationalization,
          components, linting and formatting, unit tests, and SEO optimization.
        </p>
      </div>
      <Grid />
    </main>
  );
}
