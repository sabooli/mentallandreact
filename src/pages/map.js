import React, { useMemo } from "react";
import { GoogleMap, Marker } from '@react-google-maps/api';

export default function Map() {
    const center = useMemo(
      () => ({ lat: 35.7657461167, lng: 51.3615819608 }),
      []
    );
    return (
        <GoogleMap zoom={16} center={center} mapContainerClassName="map-container" ></GoogleMap>
    )
}