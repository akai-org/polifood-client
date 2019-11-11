import React, { useState } from 'react';
import MainMap from '../components/Map/MainMap/MainMap';
import SearchBar from '../components/SearchBar/SearchBar';
import FilterModal from '../components/FilterModal/FilterModal';

function MapPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(s => !s);
  };
  return (
    <div className="MapPage">
      <MainMap />
      <SearchBar toggleModal={toggleModal} />
      <FilterModal modalData={{ isVisible: isModalOpen, toggleModal }} />
    </div>
  );
}

export default MapPage;
