import { useEffect, useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
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
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/mcdonalds.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_KEY}&bbox=9.808210,53.558600,10.112420,53.653780&limit=10`;
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    const fetchLocations = async () => {
      await fetch(url)
        .then((response) => response.text())
        .then((res) => JSON.parse(res))
        .then((json) => {
          setLocations(json.features);
        })
        .catch((err) => console.log({ err }));
    };
    fetchLocations();
  }, []);
  return (
    <>
      <ReactMapGL
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_KEY}
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      >
        {locations.map((location) => (
          <div key={location.id}>
            <Marker
              latitude={location.center[1]}
              longitude={location.center[0]}
              offsetLeft={-20}
              offsetTop={-10}
            >
              <span role="img" aria-label="push-pin">
                📌
              </span>
            </Marker>
          </div>
        ))}
      </ReactMapGL>
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
