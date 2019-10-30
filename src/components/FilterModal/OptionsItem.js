import React from 'react';

const OptionsItem = ({ itemValue, ifSelected, selectHandler }) => {
  return (
    <span
      className={`options-item${ifSelected ? ' options-item--selected' : ''}`}
      onTouchEnd={selectHandler}
    >
      {itemValue.charAt(0).toUpperCase() + itemValue.slice(1)}
    </span>
  );
};

export default OptionsItem;
