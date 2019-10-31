import React from 'react';
import PlaceDescription from '../../components/PlaceDescription/PlaceDescription';
import OpeningHours from '../../components/OpeningHours/OpeningHours';
import RestaurantPicture from '../../assets/images/restaurant.jpg';
import './RestaurantPageInfo.scss';

export default function RestaurantInfoPage() {
  return (
    <div className="RestaurantPageInfo">
      <img src={RestaurantPicture} alt="" className="restaurant-picture"/>
      
      <div class="contentt">
        <PlaceDescription
          name="Stołówka studencka"
          address="ul. Baraniaka 6"
          rating={4}
          description="Lorem ipsum dolor sit amet"
        />

        <OpeningHours />
      </div>
    </div>
  );
}