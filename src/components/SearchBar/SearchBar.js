import React from 'react';
import './SearchBar.scss';
import searchIcon from '../../assets/icons/search.svg';
import filterIcon from '../../assets/icons/filter.svg';

const SearchBar = ({ toggleModal }) => {
  return (
    <div className="search-bar">
      <img src={searchIcon} alt="search-icon" className="search-bar__search" />
      <input
        type="text"
        placeholder="Type to search..."
        className="search-bar__input"
      />
      <img
        src={filterIcon}
        alt="filter-icon"
        className="search-bar__filter"
        onTouchEnd={toggleModal}
      />
    </div>
  );
};

export default SearchBar;
