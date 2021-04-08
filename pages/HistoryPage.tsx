import HeaderButton from "../components/headerButton/headerButton";
import SubHeader from "../components/subHeader/subHeader";
import styles from "../styles/HistoryPage.module.css";
import "react-calendar/dist/Calendar.css";
import FooterButton from "../components/footerButton/footerButton";
import OrderCard from "../components/orderCards/orderCards";

export default function HistoryPage() {
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
        <OrderCard
          imgSrc="/Card-Placeholder.png"
          imgSrcStart="/Start.svg"
          imgSrcEnd="/Target.svg"
          name="Max"
          surname="Mustermann"
          startAddress="Mönckebergstrasse 7, 20099 Hamburg"
          address="Ballindamm 9, 20099 Hamburg"
        />
        <OrderCard
          imgSrc="/Card-Placeholder.png"
          imgSrcStart="/Start.svg"
          imgSrcEnd="/Target.svg"
          name="Max"
          surname="Mustermann"
          startAddress="Mönckebergstrasse 7, 20099 Hamburg"
          address="Ballindamm 9, 20099 Hamburg"
        />
        <OrderCard
          imgSrc="/Card-Placeholder.png"
          imgSrcStart="/Start.svg"
          imgSrcEnd="/Target.svg"
          name="Max"
          surname="Mustermann"
          startAddress="Mönckebergstrasse 7, 20099 Hamburg"
          address="Ballindamm 9, 20099 Hamburg"
        />
        <OrderCard
          imgSrc="/Card-Placeholder.png"
          imgSrcStart="/Start.svg"
          imgSrcEnd="/Target.svg"
          name="Max"
          surname="Mustermann"
          startAddress="Mönckebergstrasse 7, 20099 Hamburg"
          address="Ballindamm 9, 20099 Hamburg"
        />
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

//       <div className={styles.cardContainer}>
//         <OrderCard

//         />
//       </div>
//     </main>
//   );
// }
