import React from 'react';

import detailsPopup from '../../../assets/icons/details-arrow.svg';
import './PlacePopup.scss';

const PlacePopup = ({ data, isActive }) => {
  const classes = ['place-popup', isActive && 'place-popup--active'].filter(
    item => item
  );
  return (
    <div className={classes.join(' ')}>
      <div className="place-popup__content">
        <div className="place-name">{data.name}</div>
        <div className="place-address">{data.address}</div>
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
