import React, { useState } from 'react';
import './App.scss';
import Map from './components/Map/Map';
import NavBar from './components/NavBar/NavBar';
import SearchBar from './components/SearchBar/SearchBar';
import FilterModal from './components/FilterModal/FilterModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(s => !s);
  };
  return (
    <div className="App">
      <Map />
      <SearchBar toggleModal={toggleModal} />
      <NavBar />
      <FilterModal modalData={{ isVisible: isModalOpen, toggleModal }} />
    </div>
  );
}

export default App;
