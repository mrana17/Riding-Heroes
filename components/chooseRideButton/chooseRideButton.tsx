import { MouseEventHandler } from "react";
import styles from "./chooseRideButton.module.css";

export type ChooseRideButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  imgSrc: string;
  label: string;
  className: string;
};

function ChooseRideButton({
  onClick,
  imgSrc,
  label,
  className,
  ...props
}: ChooseRideButtonProps) {
  return (
    <button className={className} onClick={onClick} {...props}>
      <div className={styles.chooseRideContainer}>
        <img src={imgSrc} className={styles.chooseRideImg} />
      </div>
      <p>{label}</p>
    </button>
  );
}

export default ChooseRideButton;
