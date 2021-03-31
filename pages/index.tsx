import router from "next/router";
import Head from "next/head";
import { useEffect } from "react";
import Logo from "../components/Logo/logo";
import styles from "../styles/WelcomePage.module.css";

export default function WelcomePage() {
  useEffect(() => {
    setTimeout(() => router.push("/LoginPage"), 3000);
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Riding-Heroes</title>
        <link rel="icon" href="/full-Logo.svg" />
      </Head>

      <main className={styles.main}>
        <Logo src="/full-Logo.svg" />
      </main>
    </div>
  );
}
