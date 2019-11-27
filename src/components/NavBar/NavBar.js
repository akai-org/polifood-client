import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import './NavBar.scss';
import navOption1 from '../../assets/icons/nav-option-1.svg';
import navOption2 from '../../assets/icons/nav-option-2.svg';
import navOption3 from '../../assets/icons/nav-option-3.svg';
import navOption1Active from '../../assets/icons/nav-option-1-active.svg';
import navOption2Active from '../../assets/icons/nav-option-2-active.svg';
import navOption3Active from '../../assets/icons/nav-option-3-active.svg';

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        {window.location.pathname === '/' ? (
          <img src={navOption1Active} alt="icon-1" className="navbar__icon" />
        ) : (
          <img src={navOption1} alt="icon-1" className="navbar__icon" />
        )}
      </Link>
      <Link to="/places">
        {window.location.pathname === '/places' ? (
          <img src={navOption2Active} alt="icon-2" className="navbar__icon" />
        ) : (
          <img src={navOption2} alt="icon-2" className="navbar__icon" />
        )}
      </Link>
      <Link to="/favourites">
        {window.location.pathname === '/favourites' ? (
          <img src={navOption3Active} alt="icon-3" className="navbar__icon" />
        ) : (
          <img src={navOption3} alt="icon-3" className="navbar__icon" />
        )}
      </Link>
    </div>
  );
};

export default withRouter(NavBar);
