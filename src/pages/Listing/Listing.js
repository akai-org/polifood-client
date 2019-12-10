import React, { useState } from 'react';
import withAbsoluteWrapper from '../../components/AbsoluteWrapper/AbsoluteWrapper';
import SearchBar from '../../components/SearchBar/SearchBar';
import FilterModal from '../../components/FilterModal/FilterModal';
import RestaurantThumb from '../../components/RestaurantThumb/RestaurantThumb';
// remove when API is ready
import restaurantData from '../../components/RestaurantThumb/restaurantData';

const Listing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(s => !s);
  };
  //  filtered restaurants will be fetched from API
  const restaurantList = restaurantData.slice(0, 4);
  return (
    <div style={{ marginTop: '110px', marginBottom: '80px' }}>
      <div>
        {restaurantList.map(restaurant => (
          <RestaurantThumb {...restaurant} />
        ))}
      </div>

      <SearchBar toggleModal={toggleModal} />
      <FilterModal modalData={{ isVisible: isModalOpen, toggleModal }} />
    </div>
  );
};

export default withAbsoluteWrapper(Listing);
