import { MouseEventHandler } from "react";
import styles from "./headerButton.module.css";
import Link from "next/link";

export type HeaderButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  imgSrc: string;
  href: string;
};

function HeaderButton({ onClick, imgSrc, href, ...props }: HeaderButtonProps) {
  return (
    <Link href={href}>
      <button className={styles.headerButton} onClick={onClick} {...props}>
        <img src={imgSrc} className={styles.headerImg} />
      </button>
    </Link>
  );
}

export default HeaderButton;
