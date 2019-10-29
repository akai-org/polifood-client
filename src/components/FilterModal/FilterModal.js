import React from 'react';
import './FilterModal.scss';

const FilterModal = ({ modalData }) => {
  return (
    <>
      <div
        className={`filters__bg ${
          modalData.isVisible ? 'filters__bg--visible' : ''
        }`}
      ></div>
      <div
        className={`filters ${modalData.isVisible ? 'filters--visible' : ''}`}
      >
        <h1 className="filters__header">Filters</h1>
        <div className="filters__options">
          {/* TODO: create new component: options-item with filter section's state handlers */}
          <span className="options-item options-item--selected">Cheap</span>
          <span className="options-item">Healthy</span>
          <span className="options-item">Vege</span>
          <span className="options-item options-item--selected">Takeaway</span>
          <span className="options-item">Fast</span>
          <span className="options-item">Healthy</span>
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
