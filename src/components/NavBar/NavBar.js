import React from 'react';
import './NavBar.scss';
import navOption1 from '../../assets/icons/nav-option-1.svg';
import navOption2 from '../../assets/icons/nav-option-2.svg';
import navOption3 from '../../assets/icons/nav-option-3.svg';

const NavBar = () => {
  return (
    <div className="navbar">
      <img src={navOption1} alt="icon-1" className="navbar__icon" />
      <img src={navOption2} alt="icon-2" className="navbar__icon" />
      <img src={navOption3} alt="icon-3" className="navbar__icon" />
    </div>
  );
};

export default NavBar;
