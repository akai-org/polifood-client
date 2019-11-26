import React from 'react';
import PlaceDescription from '../../components/PlaceDescription/PlaceDescription';
import OpeningHours from '../../components/OpeningHours/OpeningHours';
import RestaurantPicture from '../../assets/images/restaurant.jpg';
import './RestaurantPageInfo.scss';
import BackButton from '../../components/BackButton/BackButton';
import MenuBlock from '../../components/MenuBlock/MenuBlock';
import CommentsSection from '../../components/CommentsSection/CommentsSection';

export default function RestaurantInfoPage() {
  return (
    <div>
      <img src={RestaurantPicture} alt="" className="restaurant-picture" />

      <div className="restaurant-info-content">
        <div>
          <PlaceDescription
            name="Stołówka studencka"
            address="ul. Baraniaka 6"
            rating={4}
            description="Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
              dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud"
          />
        </div>
        <div className="opening-hours">
          <OpeningHours />
        </div>
        <MenuBlock />
          <CommentsSection />
      </div>

      <BackButton />
    </div>
  );
}
