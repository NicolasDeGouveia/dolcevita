import './styles.scss';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import Arrow from '../../images/right-arrow.png';

const SliderButtons = styled.div`
position: absolute;
bottom: 50px;
right: 50px;
display: flex;
z-index: 10;
`;

const arrowButtons = css`
width: 50px;
height: 50px;
color: #fff;
cursor: pointer;
background: #000d1a;
border-radius: 50px;
padding: 10px;
margin-right: 1rem;
user-select: none;
transition: 0.3s;

&:hover {
  background: #cd853f;
  transform: scale(1.05);
}
`;

const PrevArrow = styled(IoArrowBack)`
${arrowButtons}
`;

const NextArrow = styled(IoArrowForward)`
${arrowButtons}
`;

export default function Hero({ Slides }) {
  const [current, setCurrent] = useState(0);
  const lenght = Slides.length;
  const timeout = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent((current === lenght - 1 ? 0 : current + 1));
    };

    timeout.current = setTimeout(nextSlide, 3000);

    // eslint-disable-next-line func-names
    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, lenght]);

  const nextSlide = () => {
    setCurrent(current === lenght - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? lenght - 1 : current - 1);
  };

  if (!Array.isArray(Slides) || Slides.length <= 0) {
    return null;
  }

  const fadeAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
    exit: { opacity: 0 },
  };

  return (
    <section className="hero">
      <div className="hero__wrapper">
        <AnimatePresence>
          {
        Slides.map((slide) => (
          <div className="hero__slide" key={slide.title}>
            { slide.id === current && (
              <div className="hero__slider">
                <div className="hero__image">
                  <motion.img
                    src={slide.image}
                    alt={slide.alt}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={fadeAnimation}
                  />
                </div>
                <div className="hero__content">
                  <h1 data-aos="fade-down" data-aos-duration="600">{slide.title}</h1>
                  <p data-aos="fade-down" data-aos-duration="600" data-aos-delay="200">{slide.subscribe}</p>
                  <Link to={slide.path} className="hero__button" data-aos="zoom-out" data-aos-duration="500" data-aos-delay="250">
                    {slide.label}
                    <img src={Arrow} alt="arrow icon" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        ))
        }
        </AnimatePresence>
        <SliderButtons>
          <PrevArrow onClick={prevSlide} />
          <NextArrow onClick={nextSlide} />
        </SliderButtons>
      </div>
    </section>
  );
}

Hero.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  Slides: PropTypes.array.isRequired,
};
