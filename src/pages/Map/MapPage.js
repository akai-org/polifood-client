import React, { useState } from 'react';
import MainMap from '../../components/Map/MainMap';
import SearchBar from '../../components/SearchBar/SearchBar';
import FilterModal from '../../components/FilterModal/FilterModal';
import withAbsoluteWrapper from '../../components/AbsoluteWrapper/AbsoluteWrapper';

function MapPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(s => !s);
  };
  return (
    <div className="map-page">
      <MainMap />
      <SearchBar toggleModal={toggleModal} />
      <FilterModal modalData={{ isVisible: isModalOpen, toggleModal }} />
    </div>
  );
}

export default withAbsoluteWrapper(MapPage);
