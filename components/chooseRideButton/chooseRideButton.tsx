import { MouseEventHandler } from "react";
import styles from "./chooseRideButton.module.css";

export type ChooseRideButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  imgSrc: string;
  label: string;
};

function ChooseRideButton({
  onClick,
  imgSrc,
  label,
  ...props
}: ChooseRideButtonProps) {
  return (
    <button className={styles.headerButton} onClick={onClick} {...props}>
      <div className={styles.container}>
        <img src={imgSrc} className={styles.headerImg} />
      </div>
      <p>{label}</p>
    </button>
  );
}

export default ChooseRideButton;
