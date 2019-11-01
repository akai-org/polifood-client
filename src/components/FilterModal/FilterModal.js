import React, { useState } from 'react';
import './FilterModal.scss';

import OptionsItem from './OptionsItem';

const initialCategories = [
  { title: 'cheap', ifSelected: false },
  { title: 'healthy', ifSelected: false },
  { title: 'vege', ifSelected: false },
  { title: 'takeaway', ifSelected: false },
  { title: 'fast', ifSelected: false }
];

const FilterModal = ({ modalData }) => {
  // destructuring prop
  const { isVisible, toggleModal } = modalData;
  // categories will be fetched from API
  const [categories, setCategories] = useState(initialCategories);
  // temporary helper function
  const selectHandler = title => {
    setCategories(state =>
      state.map(item => {
        if (item.title === title) {
          return { ...item, ifSelected: !item.ifSelected };
        } else return item;
      })
    );
  };
  // generate classes based on prop
  const bgClasses = ['filters__bg', isVisible && 'filters__bg--visible'].filter(
    item => item
  );
  const filtersClasses = ['filters', isVisible && 'filters--visible'].filter(
    item => item
  );

  return (
    <>
      <div className={bgClasses.join(' ')}></div>
      <div className={filtersClasses.join(' ')}>
        <h1 className="filters__header">Filters</h1>
        <div className="filters__options">
          {categories.map(category => (
            <OptionsItem
              key={category.title}
              itemValue={category.title}
              ifSelected={category.ifSelected}
              selectHandler={() => selectHandler(category.title)}
            />
          ))}
        </div>
        <div className="filters__selects"></div>
        <button type="button" className="filters__btn" onTouchEnd={toggleModal}>
          Apply Filters
        </button>
      </div>
    </>
  );
};

export default FilterModal;
