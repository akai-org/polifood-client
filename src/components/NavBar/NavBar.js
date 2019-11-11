import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';
import navOption1 from '../../assets/icons/nav-option-1.svg';
import navOption2 from '../../assets/icons/nav-option-2.svg';
import navOption3 from '../../assets/icons/nav-option-3.svg';

const NavBar = () => {
  const links = [
    { to: '/', src: navOption1, alt: 'icon-1' },
    { to: '/restaurant-info', src: navOption2, alt: 'icon-2' },
    { to: '/', src: navOption3, alt: 'icon-3' }
  ];

  return (
    <div className="navbar">
      {links.map(link => (
        <Link to={link.to}>
          <img src={link.src} alt={link.alt} className="navbar__icon" />
        </Link>
      ))}
    </div>
  );
};

export default NavBar;
