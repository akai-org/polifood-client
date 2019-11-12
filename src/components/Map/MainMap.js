import React, { useContext } from 'react';
import { Map, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import PlacePopup from './PlacePopup/PlacePopup';
import 'leaflet/dist/leaflet.css';

import { Context as MapContext } from '../../context/mapContext';

const customIcon = new L.Icon({
  iconUrl: require('../../assets/icons/marker-pin.svg'),
  iconRetinaUrl: require('../../assets/icons/marker-pin.svg'),
  iconAnchor: [29.5, 60],
  iconSize: [60, 60]
});

const MainMap = () => {
  const {
    state,
    setMapZoom,
    setMapPosition,
    setCurrentMarker,
    closePopup
  } = useContext(MapContext);

  const togglePopup = id => {
    if (state.selectedMarker.id === id && state.popupActive) {
      closePopup();
    } else {
      const marker = state.markers.find(marker => marker.id === id);
      setCurrentMarker(marker);
    }
  };

  return (
    <Map
      center={state.mapPosition}
      zoom={state.mapZoom}
      zoomControl={false}
      onmoveend={e => setMapPosition(e.target.getCenter())}
      onzoomend={e => setMapZoom(e.target.getZoom())}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {state.markers.map(marker => (
        <Marker
          key={marker.id}
          position={marker.position}
          icon={customIcon}
          onclick={() => togglePopup(marker.id)}
        />
      ))}
      <PlacePopup />
    </Map>
  );
};

export default MainMap;
