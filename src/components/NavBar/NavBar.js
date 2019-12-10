import React from 'react';
import { NavLink } from 'react-router-dom';
import Svg from 'react-inlinesvg';
import './NavBar.scss';
import mapIcon from '../../assets/icons/nav/map.svg';
import placesListIcon from '../../assets/icons/nav/list.svg';
import favouritePlacesIcon from '../../assets/icons/nav/favourite.svg';

const links = [
  { to: '/', src: mapIcon },
  { to: '/restaurant-info', src: placesListIcon },
  { to: '/favourite-places', src: favouritePlacesIcon }
];

const NavBar = () => {
  return (
    <div className="navbar">
      {links.map(link => (
        <NavLink
          exact={link.to === '/'}
          to={link.to}
          key={link.to}
          activeClassName="navbar__active"
        >
          <Svg src={link.src} className="navbar__icon" />
        </NavLink>
      ))}
    </div>
  );
};

export default NavBar;
