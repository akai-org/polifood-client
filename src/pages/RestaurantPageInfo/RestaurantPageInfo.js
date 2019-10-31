import React from 'react';
import PlaceDescription from '../../components/PlaceDescription/PlaceDescription';
import OpeningHours from '../../components/OpeningHours/OpeningHours';
import RestaurantPicture from '../../assets/images/restaurant.jpg';
import './RestaurantPageInfo.scss';
import BackButton from '../../components/BackButton/BackButton';

export default function RestaurantInfoPage() {
  return (
    <div className="RestaurantPageInfo">
      <img src={RestaurantPicture} alt="" className="restaurant-picture"/>
      
      <div className="restaurant-info-content">
        <div>
          <PlaceDescription
            name="Stołówka studencka"
            address="ul. Baraniaka 6"
            rating={4}
            description="Lorem ipsum dolor sit amet"
          /> 
        </div>
        <div className="opening-hours">
          <OpeningHours />
        </div>
        <div className="comments">
          <h3>Komentarze</h3>
        </div>
      </div>
      
      <BackButton />
    </div>
  );
}