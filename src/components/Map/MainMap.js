import React, { useState } from 'react';
import { Map, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import PlacePopup from './PlacePopup/PlacePopup';
import 'leaflet/dist/leaflet.css';

const customIcon = new L.Icon({
  iconUrl: require('../../assets/icons/marker-pin.svg'),
  iconRetinaUrl: require('../../assets/icons/marker-pin.svg'),
  iconAnchor: [29.5, 60],
  iconSize: [60, 60]
});

const dummyMarkers = [
  {
    id: '1',
    position: [52.403596, 16.950051],
    name: 'Centrum Wykładowe PP',
    address: 'ul. Piotrowo 2'
  },
  {
    id: '2',
    position: [52.402573, 16.947926],
    name: 'Centrum Sportu PP',
    address: 'ul. Piotrowo 4'
  }
];

const initialPopup = {
  id: 'dummy',
  name: '',
  address: ''
};

const MainMap = () => {
  const [position, setPosition] = useState([52.403596, 16.950051]);
  const [zoom, setZoom] = useState(16);
  const [isPopupActive, setIsPopupActive] = useState(false);
  const [currentPopup, setCurrentPopup] = useState(initialPopup);

  const openPopup = id => {
    if (currentPopup.id === id) {
      setZoom(16);
      setIsPopupActive(false);
      setTimeout(() => setCurrentPopup(initialPopup), 200);
    } else {
      const marker = dummyMarkers.find(marker => marker.id === id);
      setCurrentPopup(marker);
      setZoom(17);
      setPosition(marker.position);
      if (!isPopupActive) setIsPopupActive(true);
    }
  };

  return (
    <Map
      center={position}
      zoom={zoom}
      zoomControl={false}
      onmoveend={e => setPosition(e.target.getCenter())}
      onzoomend={e => setZoom(e.target.getZoom())}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {dummyMarkers.map(marker => (
        <Marker
          key={marker.id}
          position={marker.position}
          icon={customIcon}
          onclick={() => openPopup(marker.id)}
        />
      ))}
      <PlacePopup data={currentPopup} isActive={isPopupActive} />
    </Map>
  );
};

export default MainMap;
