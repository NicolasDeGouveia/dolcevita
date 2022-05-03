import './styles.scss';
import map from '../../images/map.jpg';

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact__container">
        <div
          className="contact__rightcolumn"
          data-aos="fade-left"
          data-aos-duration="1300"
          data-aos-once="true"
          data-aos-anchor-placement="center bottom"
        >
          <form id="contact_form">
            <div className="contact__form__input">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" />
              <label htmlFor="email">Email</label>
              <input type="email" name="email" />
            </div>
            <div className="contact__form__textarea">
              <label htmlFor="textarea">Message</label>
              <textarea name="textarea" />
            </div>
            <div className="contact__form__button">
              <button type="submit" form="contact_form" aria-label="Send">
                Send
              </button>
            </div>
          </form>
        </div>
        <div
          className="contact__leftcolumn"
          data-aos="fade-right"
          data-aos-duration="1300"
          data-aos-once="true"
          data-aos-anchor-placement="center bottom"
        >
          <img src={map} alt="map" />
        </div>

      </div>
    </section>
  );
}
