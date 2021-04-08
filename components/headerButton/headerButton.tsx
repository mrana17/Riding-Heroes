import { MouseEventHandler } from "react";
import styles from "./headerButton.module.css";

export type HeaderButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  imgSrc: string;
  className: string;
};

function HeaderButton({
  onClick,
  className,
  imgSrc,
  ...props
}: HeaderButtonProps) {
  return (
    <button className={className} onClick={onClick} {...props}>
      <img src={imgSrc} className={styles.headerImg} />
    </button>
  );
}

export default HeaderButton;
