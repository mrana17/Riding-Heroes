import HeaderButton from "../components/headerButton/headerButton";
import SubHeader from "../components/subHeader/subHeader";
import styles from "../styles/HistoryPage.module.css";
import FooterButton from "../components/footerButton/footerButton";
import OrderCard, { OrderCardProps } from "../components/orderCards/orderCards";
import { useEffect, useState } from "react";

export default function HistoryPage() {
  const [orders, setOrders] = useState<OrderCardProps[]>([]);

  useEffect(() => {
    fetch("/api/orders")
      .then((data) => data.json())
      .then((orders: OrderCardProps[]) => setOrders(orders));
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
      <div className={styles.cardContainer}>
        {orders.map((order: OrderCardProps) => (
          <OrderCard
            key={order.id}
            id={order.id}
            imgSrc="/Card-Placeholder.png"
            imgSrcStart="/Start.svg"
            imgSrcEnd="/Target.svg"
            name={order.name}
            Surname={order.Surname}
            startAddress="Mönckebergstrasse 7, 20099 Hamburg"
            street={order.street}
            number={order.number}
            plz={order.plz}
            city={order.city}
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
