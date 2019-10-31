import React from 'react';

const ErrorPopup = ({ message }) => {
  return (
    <div
      className={`error-message${message ? ' error-message--active' : null}`}
    >
      {message}
    </div>
  );
};

export default ErrorPopup;
