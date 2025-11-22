"use client";

import React, { memo } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

import dynamic from "next/dynamic";
import { Loading } from "./contact-map-container";

interface Props {
  posix: [number, number];
  setMarkers?: (location: [number, number]) => void;
  zoom?: number;
}

const defaults = {
  zoom: 19,
};

const LocationMarker = ({ posix, setMarkers }: Props) => {
  useMapEvents({
    click: (e) => {
      const { lat, lng } = e.latlng;
      setMarkers?.([lat, lng]);
    },
  });

  return (
    <Marker position={posix} draggable={false}>
      <Popup>
        Mi ubicación <br />
        Lat: {posix[0].toFixed(4)}, Lng: {posix[1].toFixed(4)}
      </Popup>
    </Marker>
  );
};

const ContactMap = ({ zoom = defaults.zoom, posix, setMarkers }: Props) => {
  return (
    <MapContainer
      center={posix}
      zoom={zoom}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <LocationMarker posix={posix} setMarkers={setMarkers} />
    </MapContainer>
  );
};

// Exportación dinámica corregida
export default dynamic(() => Promise.resolve(memo(ContactMap)), {
  ssr: false,
  loading: () => <Loading />,
});
