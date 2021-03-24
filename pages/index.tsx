import Head from "next/head";
import styles from "../styles/Home.module.css";
import Button from "../components/loginButton/loginButton";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Button label="Login" onClick={() => Home()} />
      </main>
    </div>
  );
}
