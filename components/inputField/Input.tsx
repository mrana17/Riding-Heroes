import styles from "./input.module.css";

export type InputProps = {
  placeholder: string;
  type: string;
};

function Input({ placeholder, ...props }: InputProps) {
  return (
    <input
      className={`${styles.input}`}
      placeholder={`${placeholder}`}
      {...props}
    ></input>
  );
}

export default Input;
