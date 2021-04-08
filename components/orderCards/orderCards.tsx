import styles from "./orderCards.module.css";

export type OrderCardProps = {
  imgSrc: string;
  imgSrcStart: string;
  imgSrcEnd: string;
  name: string;
  surname: string;
  startAddress: string;
  address: string;
};

function OrderCard({
  imgSrc,
  imgSrcStart,
  imgSrcEnd,
  name,
  surname,
  startAddress,
  address,
  ...props
}: OrderCardProps) {
  return (
    <div className={styles.orderCard} {...props}>
      <div className={styles.orderCardContainer}>
        <img src={imgSrc} className={styles.orderCardImg} />
        <p className={styles.orderCardName}>
          {name} {surname}
        </p>
        <p className={styles.orderCardStartAddress}>
          <img src={imgSrcStart} className={styles.orderCardStart} />
          {startAddress}
        </p>
        <p className={styles.orderCardAddress}>
          <img src={imgSrcEnd} className={styles.orderCardEnd} />
          {address}
        </p>
      </div>
    </div>
  );
}

export default OrderCard;
