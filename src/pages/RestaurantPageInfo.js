import React from 'react';
import PlaceDescription from '../components/PlaceDescription/PlaceDescription';
import OpeningHours from '../components/OpeningHours/OpeningHours';

export default function RestaurantInfoPage() {
  return (
    <div className="MapPage">
      <PlaceDescription
        name="Stołówka studencka"
        address="ul. Baraniaka 6"
        rating={4}
        description="Lorem ipsum dolor sit amet"
      />
      
      <OpeningHours />
    </div>
  );
}