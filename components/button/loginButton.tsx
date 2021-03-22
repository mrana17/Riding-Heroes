import { MouseEventHandler } from "react";
import styles from "./button.module.css";

export type ButtonProps = {
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

function LoginButton({ label, onClick, ...props }: ButtonProps) {
  return (
    <button
      className={`${styles.btn} ${styles.loginButton}`}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
}

export default LoginButton;
