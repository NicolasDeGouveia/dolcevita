import { Link } from 'react-router-dom';
import './styles.scss';
import styled from 'styled-components';
import { IoMdArrowRoundForward } from 'react-icons/io';
import Cracovia from '../../images/Cracovia.jpg';
import NewYork from '../../images/Newyork.jpg';

const Arrow = styled(IoMdArrowRoundForward)`
margin-left: 10px;
`;

export default function Listing() {
  return (
    <section className="listing">
      <div className="listing__container">
        <div className="listing__heading">
          <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-once="true" data-aos-anchor-placement="center bottom">Our Latest Travels</h1>
        </div>
        <div className="listing__inforow">
          <div
            className="listing__infowrap"
            data-aos="zoom-out-down"
            data-aos-duration="1200"
            data-aos-once="true"
            data-aos-anchor-placement="center bottom"
          >
            <img src={Cracovia} alt="City" />
            <h2>Mix of History and Architecture</h2>
            <Link to="/travels">
              <p>See More</p>
              <Arrow />
            </Link>
          </div>
          <div className="listing__infowrap">
            <img className="listing__infowrap__imgtwo" src={NewYork} alt="City" />
            <h2>The City That Never Sleeps</h2>
            <Link className="listing__infowrap__link" to="/travels">
              <p>See More</p>
              <Arrow />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
