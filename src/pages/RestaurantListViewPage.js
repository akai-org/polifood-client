import React, { useState } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import FilterModal from '../components/FilterModal/FilterModal';
import RestaurantThumb from '../components/RestaurantThumb/RestaurantThumb';

// remove when API is ready
import restaurantData from '../components/RestaurantThumb/restaurantData';

function RestaurantListViewPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(s => !s);
  };
  //  filtered restaurants will be fetched from API
  const restaurantList = restaurantData.slice(0, 4);
  return (
    <div
      className="restaurantListView"
      style={{ marginTop: '110px', marginBottom: '80px' }}
    >
      <div className="restaurantList">
        {restaurantList.map(restaurant => (
          <RestaurantThumb {...restaurant} />
        ))}
      </div>

      <SearchBar toggleModal={toggleModal} />
      <FilterModal modalData={{ isVisible: isModalOpen, toggleModal }} />
    </div>
  );
}

export default RestaurantListViewPage;
