import Head from "next/head";
import Link from "next/link";
import Logo from "../components/Logo/logo";
import styles from "../styles/WelcomePage.module.css";

export default function WelcomePage() {
  function myFunction() {
    {
      setTimeout(() => {
        location.href = "/LoginPage";
      }, 3000);
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Riding-Heroes</title>
        <link rel="icon" href="/full-Logo.svg" />
      </Head>

      <main className={styles.main}>
        <Link href="/LoginPage">
          <Logo src="/full-Logo.svg" />
        </Link>
      </main>
    </div>
  );
}
