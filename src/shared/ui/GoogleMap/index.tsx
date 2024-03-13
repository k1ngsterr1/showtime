import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapContainer = () => {
  const almatyCoordinates = { lat: 43.238949, lng: 76.889709 };

  const mapOptions = {
    zoom: 9,
    center: almatyCoordinates,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCm8eTtyItGMdGJUfzBDoV3lwr_AdSPpMY">
      <GoogleMap
        mapContainerStyle={{ height: "400px", width: "100%" }}
        center={almatyCoordinates}
        zoom={9}
        options={mapOptions}
      >
        <Marker position={almatyCoordinates} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
