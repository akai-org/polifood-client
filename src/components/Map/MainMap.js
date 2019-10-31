import React, { useState } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export const customIcon = new L.Icon({
  iconUrl: require('../../assets/icons/marker-pin.svg'),
  iconRetinaUrl: require('../../assets/icons/marker-pin.svg'),
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [60, 60],
  // shadowUrl: '../assets/marker-shadow.png',
  shadowSize: [68, 95],
  shadowAnchor: [20, 92]
});

const MainMap = props => {
  const [position] = useState([52.399377, 16.950109]);

  return (
    <Map center={position} zoom={16} zoomControl={false}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position} icon={customIcon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </Map>
  );
};

export default MainMap;
