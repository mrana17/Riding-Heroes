import styles from "../styles/LoginPage.module.css";
import Button from "../components/loginButton/loginButton";
import Input from "../components/inputField/Input";
import Logo from "../components/Logo/logo";
import router from "next/router";

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <form className={styles.main}>
        <Logo src="/full-Logo.svg" />
        <div className={styles.inputFields}>
          <Input type="text" placeholder="Benutzername" />
          <Input type="password" placeholder="Passwort" />
        </div>
        <Button label="Login" onClick={() => router.push("/ProfilePage")} />
      </form>
    </div>
  );
}
