import styles from "./input.module.css";

export type InputProps = {
  placeholder: string;
  type: string;
};

function Input({ placeholder, type }: InputProps) {
  return (
    <input
      className={styles.input}
      type={type}
      placeholder={placeholder}
    ></input>
  );
}

export default Input;
