import { useState, useEffect } from 'react';

export const usePosition = () => {
  const [position, setPosition] = useState([]);
  const [error, setError] = useState(null);

  const onChange = ({ coords }) => {
    setPosition([coords.latitude, coords.longitude]);
  };

  const onError = error => {
    setError(error.message);
  };

  useEffect(() => {
    const geo = navigator.geolocation;
    if (!geo) {
      setError('Geolocation not supported');
      return;
    }

    const watcher = geo.watchPosition(onChange, onError);

    // returned function executes when component is unmounted
    return () => geo.clearWatch(watcher);
  }, []);
  return [position, error];
};
