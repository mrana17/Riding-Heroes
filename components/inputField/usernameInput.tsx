import styles from "./input.module.css";

export type InputProps = {
  placeholder: string;
  type: string;
};

function UsernameInput({ placeholder, ...props }: InputProps) {
  return (
    <input
      className={`${styles.input} ${styles.usernameInput}`}
      placeholder={`${placeholder}`}
      {...props}
    ></input>
  );
}

export default UsernameInput;
