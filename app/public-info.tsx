import type { ReactNode } from "react";
import styles from "./public-info.module.css";

type PublicInfoShellProps = {
  title: string;
  updated: string;
  children: ReactNode;
};

export function PublicInfoShell({ title, updated, children }: PublicInfoShellProps) {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <a className={styles.brand} href="https://www.stephendottech.pro/">
          Stephen.Tech
        </a>
        <span className={styles.headerNote}>Personal app information</span>
      </header>

      <article className={styles.document}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.updated}>Last reviewed {updated}</p>
        <div className={styles.content}>{children}</div>
      </article>

      <footer className={styles.footer}>
        <span>Hermes Desktop (Personal)</span>
        <span>Operated for personal use by the owner.</span>
      </footer>
    </main>
  );
}
