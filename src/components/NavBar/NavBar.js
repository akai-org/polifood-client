import React from 'react';
import { Link } from 'react-router-dom';
import Svg from 'react-inlinesvg';
import './NavBar.scss';
import navOption1 from '../../assets/icons/nav-option-1.svg';
import navOption2 from '../../assets/icons/nav-option-2.svg';
import navOption3 from '../../assets/icons/nav-option-3.svg';

const links = [
  { to: '/', src: navOption1, alt: 'icon-1' },
  { to: '/restaurant-info', src: navOption2, alt: 'icon-2' },
  { to: '/', src: navOption3, alt: 'icon-3' }
];

const NavBar = () => {
  const [activeEntryIndex, setActiveEntry] = useState(1);

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
