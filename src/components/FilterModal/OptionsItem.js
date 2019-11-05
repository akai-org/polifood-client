import React from 'react';

const OptionsItem = ({ itemValue, ifSelected, selectHandler }) => {
  const classes = [
    'options-item',
    ifSelected && 'options-item--selected'
  ].filter(item => item);
  return (
    <span className={classes.join(' ')} onTouchEnd={selectHandler}>
      {itemValue.charAt(0).toUpperCase() + itemValue.slice(1)}
    </span>
  );
};

export default OptionsItem;
