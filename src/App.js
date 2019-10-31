import React, { useState } from 'react';
import './App.scss';
import MainMap from './components/Map/MainMap';
import NavBar from './components/NavBar/NavBar';
import SearchBar from './components/SearchBar/SearchBar';
import FilterModal from './components/FilterModal/FilterModal';
import { usePosition } from './utils/customHooks';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [position, error] = usePosition();
  const toggleModal = () => {
    setIsModalOpen(s => !s);
  };
  if (error) alert(error);
  return (
    <div className="App">
      <MainMap currentGeolocation={position} />
      <SearchBar toggleModal={toggleModal} />
      <NavBar />
      <FilterModal modalData={{ isVisible: isModalOpen, toggleModal }} />
    </div>
  );
}

export default App;
