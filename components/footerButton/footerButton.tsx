import { MouseEventHandler } from "react";
import styles from "./footerButton.module.css";
import Link from "next/link";

export type FooterButtonProps = {
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  imgSrc: string;
  href: string;
};

function FooterButton({
  label,
  onClick,
  imgSrc,
  href,
  ...props
}: FooterButtonProps) {
  return (
    <Link href={href}>
      <button className={styles.footerButton} onClick={onClick} {...props}>
        <img src={imgSrc} className={styles.footerImg} />
        <label className={styles.footerBtnText}> {label}</label>
      </button>
    </Link>
  );
}

export default FooterButton;
