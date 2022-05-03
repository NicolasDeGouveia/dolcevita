import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './styles.scss';

export default function Infos({ infosData }) {
  return (
    <section className="infos">
      <div className="infos__container">
        <div
          className="infos__leftcolumn"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
          data-aos-delay={infosData[0].delay}
          data-aos-anchor-placement="center bottom"
        >
          <h1>{infosData[0].heading}</h1>
          <p>{infosData[0].paragraphOne}</p>
          <p>{infosData[0].paragraphTwo}</p>
          <Button path="/travels" content={infosData[0].buttonLabel} />
        </div>
        <div className="infos__rightcolumn" reverse={+infosData[0].reverse}>
          <img
            src={infosData[0].image}
            alt="City"
            data-aos="zoom-out"
            data-aos-duration="1000"
            data-aos-once="true"
            data-aos-delay={infosData[0].delay}
            data-aos-anchor-placement="center bottom"
          />
        </div>
      </div>
    </section>
  );
}

Infos.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  infosData: PropTypes.array.isRequired,
};
