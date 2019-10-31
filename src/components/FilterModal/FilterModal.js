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

  return (
    <>
      <div
        className={`filters__bg${
          modalData.isVisible ? ' filters__bg--visible' : ''
        }`}
      ></div>
      <div
        className={`filters${modalData.isVisible ? ' filters--visible' : ''}`}
      >
        <h1 className="filters__header">Filters</h1>
        <div className="filters__options">
          {/* TODO: create new component: options-item with filter section's state handlers */}
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
        <button
          type="button"
          className="filters__btn"
          onTouchEnd={modalData.toggleModal}
        >
          Apply Filters
        </button>
      </div>
    </>
  );
};

export default FilterModal;
