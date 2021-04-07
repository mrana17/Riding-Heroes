import Head from "next/head";
import ChooseRideButton from "../components/chooseRideButton/chooseRideButton";
import HeaderButton from "../components/headerButton/headerButton";
import SubHeader from "../components/subHeader/subHeader";
import styles from "../styles/ProfilePage.module.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import FooterButton from "../components/footerButton/footerButton";

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Login Page</title>
        <link rel="icon" href="/full-Logo.svg" />
      </Head>

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
        <div className={styles.chooseRideContainer}>
          <ChooseRideButton
            imgSrc="/bike.svg"
            label="Fahrrad"
            onClick={() => alert("You are riding a bike")}
            className={styles.chooseRideButton}
          />
          <ChooseRideButton
            imgSrc="/car.svg"
            label="Auto"
            onClick={() => alert("You are riding a car")}
            className={styles.chooseRideButton}
          />
          <ChooseRideButton
            imgSrc="/scooter.svg"
            label="Scooter"
            onClick={() => alert("You are riding a scooter")}
            className={styles.chooseRideButton}
          />
          <ChooseRideButton
            imgSrc="/Roller.svg"
            label="Roller"
            onClick={() => alert("You are riding a roller")}
            className={styles.chooseRideButton}
          />
        </div>
        <div className={styles.calendar}>
          <Calendar />
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
    </div>
  );
}
