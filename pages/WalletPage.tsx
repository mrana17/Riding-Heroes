import HeaderButton from "../components/headerButton/headerButton";
import SubHeader from "../components/subHeader/subHeader";
import styles from "../styles/WalletPage.module.css";
import FooterButton from "../components/footerButton/footerButton";
import Table, { TableProps } from "../components/table/table";
import { useEffect, useState } from "react";

export default function WalletPage() {
  const [orders, setOrders] = useState<TableProps[]>([]);

  useEffect(() => {
    fetch("/api/orders")
      .then((data) => data.json())
      .then((orders: TableProps[]) => setOrders(orders));
  }, []);
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <HeaderButton
          className={styles.notificationsButton}
          imgSrc="/bell.svg"
          onClick={() => alert("Notifications will follow")}
        />
        <SubHeader
          className={styles.subHeader}
          infoOne="Fahrten"
          infoTwo="Verdienst"
          infoThree="Trinkgeld"
          infoOneNumber={16}
          infoTwoNumber={[50.5, "€"]}
          infoThreeNumber={[25.1, "€"]}
        />
        <HeaderButton
          className={styles.moreButton}
          imgSrc="/more.svg"
          onClick={() => alert("more functions will follow")}
        />
      </div>
      <div className={styles.tableContainer}>
        {orders.map((order: TableProps) => (
          <Table
            key={order.id}
            idTitle="ID"
            addressTitle="Address"
            saleTitle="Sale"
            tipTitle="Trinkgeld"
            sumTitle="Summe"
            id={order.id}
            street={order.street}
            number={order.number}
            plz={order.plz}
            city={order.city}
            sale={order.sale}
            tip={2.3}
            sum={76.4}
          />
        ))}
      </div>
      <div className={styles.footer}>
        <FooterButton
          label="Profile"
          imgSrc="/Profile-picture.svg"
          href="/ProfilePage"
        />
        <FooterButton label="Wallet" imgSrc="/wallet.svg" href="WalletPage" />
        <FooterButton label="Map" imgSrc="/route-map.svg" href="MapPage" />
        <FooterButton
          label="History"
          imgSrc="/History.svg"
          href="HistoryPage"
        />
      </div>
    </main>
  );
}
