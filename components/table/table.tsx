import styles from "./table.module.css";

export type TableProps = {
  idTitle: string;
  addressTitle: string;
  saleTitle: string;
  tipTitle: string;
  sumTitle: string;
  id: number;
  street: string;
  number: number;
  plz: number;
  city: string;
  sale: number;
  tip: number;
  sum: number;
};

function Table({
  id,
  street,
  number,
  plz,
  city,
  sale,
  idTitle,
  addressTitle,
  saleTitle,
  tipTitle,
  tip,
  sumTitle,
  sum,
}: TableProps) {
  return (
    <table className={styles.table}>
      <tbody>
        <tr>
          <td className={styles.table}>{idTitle}</td>
          <td className={styles.table}>{addressTitle}</td>
          <td className={styles.table}>{saleTitle}</td>
          <td className={styles.table}>{tipTitle}</td>
          <td className={styles.table}>{sumTitle}</td>
        </tr>
        <tr>
          <td className={styles.table}>{id}</td>
          <td className={styles.table}>
            {street} {number}, {plz} {city}
          </td>
          <td className={styles.table}>{sale}</td>
          <td className={styles.table}>{tip}</td>
          <td className={styles.table}>{sum}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
