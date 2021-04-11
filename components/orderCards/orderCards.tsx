import styles from "./orderCards.module.css";

export type OrderCardProps = {
  id: number;
  imgSrc: string;
  imgSrcStart: string;
  imgSrcEnd: string;
  name: string;
  Surname: string;
  startAddress: string;
  street: string;
  number: number;
  plz: number;
  city: string;
};

function OrderCard({
  id,
  imgSrc,
  imgSrcStart,
  imgSrcEnd,
  name,
  Surname,
  startAddress,
  street,
  number,
  plz,
  city,
  ...props
}: OrderCardProps) {
  return (
    <div className={styles.orderCard} {...props}>
      <div className={styles.orderCardContainer}>
        <img src={imgSrc} className={styles.orderCardImg} />
        <p className={styles.orderCardName}>
          {name} {Surname}
        </p>
        <p className={styles.orderCardStartAddress}>
          <img src={imgSrcStart} className={styles.orderCardStart} />
          {startAddress}
        </p>
        <p className={styles.orderCardAddress}>
          <img src={imgSrcEnd} className={styles.orderCardEnd} />
          {street} {number}
          {", "}
          {plz} {city}
        </p>
      </div>
    </div>
  );
}

export default OrderCard;
