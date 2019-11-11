import React from 'react';
import { Link } from 'react-router-dom';
import Svg from 'react-inlinesvg';
import './NavBar.scss';
import mapIcon from '../../assets/icons/nav/map.svg';
import placesListIcon from '../../assets/icons/nav/list.svg';
import favouritePlacesIcon from '../../assets/icons/nav/favourite.svg';

const links = [
  { to: '/', src: mapIcon },
  { to: '/restaurant-info', src: placesListIcon },
  { to: '/', src: favouritePlacesIcon }
];

const NavBar = () => {
  const [activeEntryIndex, setActiveEntry] = useState(0);

  return (
    <div className="navbar">
      {links.map((link, index) => (
        <Link to={link.to} key={index}>
          <Svg
            src={link.src}
            className={`navbar__icon ${activeEntryIndex === index ? 'navbar__active' : ''}`}
            onClick={() => setActiveEntry(index)}
          />
        </Link>
      ))}
    </div>
  );
};

export default NavBar;
