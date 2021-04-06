import styles from "./table.module.css";

export type TableProps = {
  idTitle: string;
  addressTitle: string;
  saleTitle: string;
  id: number;
  address: string;
  sale: number;
};

function Table({
  id,
  address,
  sale,
  idTitle,
  addressTitle,
  saleTitle,
}: TableProps) {
  return (
    <table className={styles.table}>
      <tbody>
        <tr>
          <td className={styles.table}>{idTitle}</td>
          <td className={styles.table}>{addressTitle}</td>
          <td className={styles.table}>{saleTitle}</td>
        </tr>
        <tr>
          <td className={styles.table}>{id}</td>
          <td className={styles.table}>{address}</td>
          <td className={styles.table}>{sale}</td>
        </tr>
        <tr>
          <td className={styles.table}>{id}</td>
          <td className={styles.table}>{address}</td>
          <td className={styles.table}>{sale}</td>
        </tr>
        <tr>
          <td className={styles.table}>{id}</td>
          <td className={styles.table}>{address}</td>
          <td className={styles.table}>{sale}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
