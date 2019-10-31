import React from 'react';

import detailsPopup from '../../../assets/icons/details-arrow.svg';
import './PlacePopup.scss';

const PlacePopup = ({ data, isActive }) => {
  return (
    <div className={`place-popup${isActive ? ' place-popup--active' : ''}`}>
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
