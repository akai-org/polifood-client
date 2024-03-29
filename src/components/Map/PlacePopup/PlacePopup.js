import React, { useContext } from 'react';
import { Context as MapContext } from '../../../context/mapContext';

import detailsPopup from '../../../assets/icons/details-arrow.svg';
import './PlacePopup.scss';

const PlacePopup = () => {
  const { state } = useContext(MapContext);
  const classes = [
    'place-popup',
    state.popupActive && 'place-popup--active'
  ].filter(item => item);

  return (
    <div className={classes.join(' ')}>
      <div className="place-popup__content">
        <div className="place-name">{state.selectedMarker.name}</div>
        <div className="place-address">{state.selectedMarker.address}</div>
      </div>
      <img
        className="place-popup__btn"
        src={detailsPopup}
        alt="details-arrow"
      />
    </div>
  );
};

export default PlacePopup;
