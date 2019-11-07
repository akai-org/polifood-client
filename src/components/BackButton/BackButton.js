import React from 'react';
import { Link } from 'react-router-dom';
import backIcon from '../../assets/icons/back.svg';
import "./BackButton.scss";

export default function BackButton() {
  return (
    <Link to="/">
      <button className="back-button">
        <img src={backIcon} alt="Back" className="button-image"/>
      </button>
    </Link>
  );
}