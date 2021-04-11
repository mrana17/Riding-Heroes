import HeaderButton from "../components/headerButton/headerButton";
import SubHeader from "../components/subHeader/subHeader";
import styles from "../styles/WalletPage.module.css";
import FooterButton from "../components/footerButton/footerButton";
import Table from "../components/table/table";

export default function WalletPage() {
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
        <Table
          idTitle="ID"
          addressTitle="Address"
          saleTitle="Sale"
          tipTitle="Trinkgeld"
          sumTitle="Summe"
          id={1}
          address="Ballindamm 9, 20099 Hamburg"
          sale={16.7}
          tip={2.3}
          sum={76.4}
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
