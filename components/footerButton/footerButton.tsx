import styles from "./footerButton.module.css";
import Link from "next/link";

export type FooterButtonProps = {
  label: string;
  imgSrc: string;
  href: string;
};

function FooterButton({ label, imgSrc, href, ...props }: FooterButtonProps) {
  return (
    <Link href={href}>
      <a className={styles.footerButton} {...props}>
        <img src={imgSrc} className={styles.footerImg} />
        <label className={styles.footerBtnText}> {label}</label>
      </a>
    </Link>
  );
}

export default FooterButton;
