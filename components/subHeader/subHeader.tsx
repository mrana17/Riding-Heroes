import styles from "./subHeader.module.css";

export type SubHeaderProps = {
  infoOne: string;
  infoOneNumber: number;
  infoTwo: string;
  infoTwoNumber: [number, string];
  infoThree: string;
  infoThreeNumber: [number, string];
};

function SubHeader({
  infoOne,
  infoOneNumber,
  infoTwo,
  infoTwoNumber,
  infoThree,
  infoThreeNumber,
  ...props
}: SubHeaderProps) {
  return (
    <section className={`${styles.subHeader}`} {...props}>
      <div>
        {infoOne}
        <p>{infoOneNumber}</p>
      </div>
      <div>
        {infoTwo}
        <p>{infoTwoNumber}</p>
      </div>
      <div>
        {infoThree}
        <p>{infoThreeNumber}</p>
      </div>
    </section>
  );
}

export default SubHeader;
