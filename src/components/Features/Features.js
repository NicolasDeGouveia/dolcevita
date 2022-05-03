import './styles.scss';
import Button from '../Button/Button';
import Destinations from '../../images/Destinations.jpg';

export default function Features() {
  return (
    <section className="features">
      <div className="features__container">
        <div className="features__wrap">
          <div className="features__columnleft">
            <div
              className="features__content"
              data-aos="fade-right"
              data-aos-duration="1300"
              data-aos-delay="300"
              data-aos-once="true"
              data-aos-anchor-placement="center bottom"
            >
              <h1>Some tips for a successful Trip</h1>
              <p>
                A travel is always a new story to tell, new memories to share.
                Discover new peoples, cultures, landscapes and history is the goal of a lifetime.
              </p>
              <p>
                Here you can see all our tips for traveling well following our experiences
              </p>
              <Button path="/tips" content="More Tips" />
            </div>
          </div>
          <div className="features__columnright">
            <img
              src={Destinations}
              alt=""
              data-aos="fade-left"
              data-aos-duration="1300"
              data-aos-once="true"
              data-aos-anchor-placement="center bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
