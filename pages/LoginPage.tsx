import Head from "next/head";
import styles from "../styles/LoginPage.module.css";
import Button from "../components/loginButton/loginButton";
import Input from "../components/inputField/Input";
import Logo from "../components/Logo/logo";

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Login Page</title>
        <link rel="icon" href="/full-Logo.svg" />
      </Head>

      <main className={styles.main}>
        <Logo src="/full-Logo.svg" />
        <div className={styles.inputFields}>
          <Input type="text" placeholder="Benutzername" />
          <Input type="password" placeholder="Passwort" />
        </div>
        <Button
          label="Login"
          onClick={() => alert("next page is coming soon")}
        />
      </main>
    </div>
  );
}
