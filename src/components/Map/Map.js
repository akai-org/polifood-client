import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const mapStyle = {
  width: '100%',
  height: '100vh'
};

const Map = props => {
  const [position] = useState([52.399377, 16.950109]);
  const mapRef = useRef(null);
  useEffect(() => {
    mapRef.current = L.map('map', {
      center: position,
      zoom: 15,
      zoomControl: false,
      layers: [
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          // attribution: `&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors`
        })
      ]
    });
  }, [position]);
  return <div id="map" style={mapStyle} />;
};

export default Map;
