import React from 'react';
import backIcon from '../../assets/icons/back.svg';
import "./BackButton.scss";

export default function BackButton() {
  return (
    <button className="back-button">
      <img src={backIcon} alt="Back" className="button-image"/>
    </button>
  );
}