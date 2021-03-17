import styles from "./button.module.css";

export type ButtonProps = {
  primary: boolean;
  label: string;
};

function Button({ primary, label, ...props }: ButtonProps) {
  return (
    <button
      className={`${styles.btn} ${primary ? styles.primary : ""}`}
      {...props}
    >
      {label}
    </button>
  );
}

export default Button;
