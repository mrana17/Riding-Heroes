import ChooseRideButton from "../components/chooseRideButton/chooseRideButton";
import HeaderButton from "../components/headerButton/headerButton";
import SubHeader from "../components/subHeader/subHeader";
import styles from "../styles/ProfilePage.module.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import FooterButton from "../components/footerButton/footerButton";
import { useState } from "react";

export default function ProfilePage() {
  const [ride, setRide] = useState("Auto");

  const updateRide = (ride: string) => {
    setRide(ride);
  };

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
      <div className={styles.chooseRideContainer}>
        <ChooseRideButton
          imgSrc="/bike.svg"
          label="Fahrrad"
          isActive={ride === "Fahrrad"}
          onSelectRide={updateRide}
        />
        <ChooseRideButton
          imgSrc="/car.svg"
          label="Auto"
          isActive={ride === "Auto"}
          onSelectRide={updateRide}
        />
        <ChooseRideButton
          imgSrc="/scooter.svg"
          label="Scooter"
          isActive={ride === "Scooter"}
          onSelectRide={updateRide}
        />
        <ChooseRideButton
          imgSrc="/Roller.svg"
          label="Roller"
          isActive={ride === "Roller"}
          onSelectRide={updateRide}
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
  );
}
