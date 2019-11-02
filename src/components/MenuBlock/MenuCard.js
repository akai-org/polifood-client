import React from 'react';

import detailsPopup from '../../assets/icons/details-arrow.svg';

const MenuCard = ({ foodType , itemImgUrl }) => {
  
  return (
    <div className="menu__card">
        <div className="menu__img">
            <img src={itemImgUrl} alt="{itemImgUrl}"></img>
        </div>
        <div className="menu__btn">
            <div className="menu__title">
                <h3 className="menu__foodType-name">{foodType}</h3>
            </div>
            <img
                className="menu__arrow-btn"
                src={detailsPopup}
                alt="details-arrow"
            />
        </div>
    </div>
  );
};

export default MenuCard;