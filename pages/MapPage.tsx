import { useState } from "react";
import ReactMapGL from "react-map-gl";

export default function MapPage() {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 53.558085,
    longitude: 10.011979,
    zoom: 10,
  });
  return (
    <ReactMapGL
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_KEY}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    ></ReactMapGL>
  );
}
