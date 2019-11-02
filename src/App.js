import React, { useState } from 'react';
import './App.scss';
import MainMap from './components/Map/MainMap';
import NavBar from './components/NavBar/NavBar';
import SearchBar from './components/SearchBar/SearchBar';
import FilterModal from './components/FilterModal/FilterModal';
import MenuBlock from './components/MenuBlock/MenuBlock';
import menuData from "./components/MenuBlock/menuData";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(s => !s);

  
  };

  return (
    <div className="App">
      <MainMap />
      <SearchBar toggleModal={toggleModal} />
      <NavBar />
      <FilterModal modalData={{ isVisible: isModalOpen, toggleModal }} />
    </div>
  );
};

export default App;
