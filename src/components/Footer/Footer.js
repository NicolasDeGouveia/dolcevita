import './styles.scss';
import styled from 'styled-components';
import { BsInstagram, BsFacebook, BsTwitter } from 'react-icons/bs';

const Facebook = styled(BsFacebook)`
font-size: clamp(1rem, 6vw, 2rem);
margin-right: 1.5rem;
color: #cd853f;
`;
const Twitter = styled(BsTwitter)`
font-size: clamp(1rem, 6vw, 2rem);
margin-right: 1.5rem;
color: #cd853f;
`;
const Instagram = styled(BsInstagram)`
font-size: clamp(1rem, 6vw, 2rem);
margin-right: 1.5rem;
color: #cd853f;
`;
export default function Footer() {
  return (
    <section className="footer">
      <div className="footer__container">
        <div className="footer__container__top">
          <div className="footer__container__quote">
            <h3>
              &quot;When you want something in life,
              {' '}
              <br />
              {' '}
              reach out and grab it.&quot;
            </h3>
          </div>
          <div className="footer__container__info">
            <h4>Find Us</h4>
            <a href="//" target="_blank" rel="noopener noreferrer">
              <Facebook />
              <p>Facebook</p>
            </a>
            <a href="//" target="_blank" rel="noopener noreferrer">
              <Twitter />
              <p>Twitter</p>
            </a>
            <a href="//" target="_blank" rel="noopener noreferrer">
              <Instagram />
              <p>Instagram</p>
            </a>
          </div>
        </div>
        <div className="footer__container__bottom">
          <p>© Copyright 2022 NDG</p>
        </div>
      </div>
    </section>
  );
}
