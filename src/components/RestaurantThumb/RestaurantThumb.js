import React from 'react';
import detailsPopup from '../../assets/icons/details-arrow-dark.svg';
import burger from '../../assets/icons/burger.svg';
import walk from '../../assets/icons/walk.svg';
import favouriteLabel from '../../assets/icons/favouriteLabel.svg';
import './RestaurantThumb.scss';
import { Link } from 'react-router-dom';

const RestaurantThumb = ({
  name,
  address,
  open,
  hashtags,
  rating,
  distance,
  favourite
}) => {
  return (
    <div className="restaurant-thumb">
      {favourite ? (
        <img
          className="favourite"
          src={favouriteLabel}
          alt="favourite label"
        ></img>
      ) : (
        <div></div>
      )}
      <div className="row">
        <div className="col">
          <h3 className="place-name">{name}</h3>
          <div className="place-address">{address}</div>
          <div
            className={
              '' +
              (open === 'Wkrótce zamknięcie' ? 'close-soon' : '') +
              (open === 'Otwarte' ? 'opened' : '') +
              (open === 'Zamknięte' ? 'closed' : '')
            }
          >
            {open}
          </div>
        </div>
        <div className="col icons">
          <div className="restaurant-current-info">
            <img className="icon burger" src={burger} alt="burger" />
            <h3 className="current-info">{rating}</h3>
          </div>
          <div className="restaurant-current-info">
            <img className="icon" src={walk} alt="walk" />
            {distance < 1 ? (
              <h3 className="current-info">{distance * 1000}m</h3>
            ) : (
              <h3 className="current info">{distance}km</h3>
            )}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="hashtags">
          {hashtags.map(hashtag => (
            <span>#{hashtag} </span>
          ))}
        </div>
        <Link to="/places/:id">
          <img
            className="place-popup__btn"
            src={detailsPopup}
            alt="details-arrow"
          />
        </Link>
      </div>
    </div>
  );
};

export default RestaurantThumb;
