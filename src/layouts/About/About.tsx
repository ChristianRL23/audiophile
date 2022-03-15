import './About.scss';
import about from './about.jpg';

const About = () => {
  return (
    <section className="about">
      <div className="about__content">
        <div className="about__content__text">
          <h4>
            Bringing you the <span>best</span> audio gear
          </h4>
          <p>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
      <img className="about__image" src={about} alt="About" />
    </section>
  );
};

export default About;
