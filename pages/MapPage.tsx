import { useState } from "react";
import ReactMapGL from "react-map-gl";
import FooterButton from "../components/footerButton/footerButton";
import styles from "../styles/MapPage.module.css";

export default function MapPage() {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 53.558085,
    longitude: 10.011979,
    zoom: 10,
  });
  return (
    <>
      <ReactMapGL
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_KEY}
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      ></ReactMapGL>
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
    </>
  );
}
