/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { menuData } from '../../data/MenuData';
import './styles.scss';

import Button from '../Button/Button';

export default function Navbar({ toggle }) {
  const [navBar, setNavBar] = useState(false);
  const location = useLocation();

  const changeBackground = () => {
    if (window.pageYOffset >= 60) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener('scroll', changeBackground);
    };

    watchScroll();

    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  const style = {
    backgroundColor: navBar || location.pathname !== '/dolcevita' ? '#CD853F' : 'transparent',
    transition: '0.4s',
  };

  return (
    <nav className="navbar" style={style}>
      <Link to="/dolcevita" className="navbar__title">
        Dolce Vita
      </Link>
      <div className="navbar__bars" onClick={toggle} />
      <div className="navbar__links">
        {
            menuData.map((menu) => (
              <NavLink to={menu.link} className="navbar__links__item" key={menu.id}>
                {menu.title}
              </NavLink>
            ))
          }
      </div>
      <Button path="/contact" content="Contact Us" />

    </nav>
  );
}

Navbar.propTypes = {
  toggle: PropTypes.func.isRequired,
};
