import React from 'react';

const ErrorPopup = ({ message }) => {
  const classes = ['error-message', message && 'error-message--active'].filter(
    item => item
  );
  return <div className={classes.join(' ')}>{message}</div>;
};

export default ErrorPopup;
