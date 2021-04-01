import styles from "./input.module.css";

export type InputProps = {
  placeholder: string;
  type: string;
};

function Input({ placeholder }: InputProps) {
  return <input className={styles.input} placeholder={placeholder}></input>;
}

export default Input;
