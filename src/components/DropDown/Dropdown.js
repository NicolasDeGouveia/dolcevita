import { Link } from 'react-router-dom';
import './styles.scss';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import { menuData } from '../../data/MenuData';

const CloseIcon = styled(FaTimes)`
color: #000d1a;
`;

export default function Dropdown({ toggle, isActive }) {
  return (
    <div className={(isActive) ? ' dropdown' : 'dropdown-isActive'}>
      <div className="dropdown__icon">
        <CloseIcon onClick={toggle} />
      </div>
      <div className="dropdown__wrapper">
        <div className="dropdown__menu">
          {
              menuData.map((menu) => (
                <Link key={menu.id} to={menu.link} className="dropdown__menu__item" onClick={toggle}>
                  {menu.title}
                </Link>

              ))
            }

        </div>
        <div className="dropdown__button">
          <Button path="/contact" content="Contact Us" />
        </div>
      </div>
    </div>
  );
}

Dropdown.propTypes = {
  isActive: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};
