import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tatiana Mac | v. tatwentyone</title>
      </Head>
      <header>
        <h1>Tatiana Mac</h1>
      </header>
      <main className={styles.main}>
        <p className={styles.title}>
          Change is iterative.
          <br />
          Growth is incremental.
        </p>
        <p className={styles.copy}>
          That's why I'm building the new tatianamac.com in the open. I wish for
          more vulnerability in our industry, so who better to start with than
          myself and my own website?
        </p>
        <h2>Principles</h2>
        <ul className={styles.copy}>
          <li>
            <span class={styles.accent}>Performance</span>: I'll only use what I
            need and load it responsibly.
          </li>
          <li>
            <span class={styles.accent}>Accessibility:</span> I'll make this
            work for as many people as possible.
          </li>
          <li>
            <span class={styles.accent}>Consent:</span> I'll ask permission for
            my user's preferences.
          </li>
          <li>
            <span class={styles.accent}>Teaching:</span> I'll document what I
            learn to pay it forward.
          </li>
        </ul>
      </main>
    </div>
  );
}
