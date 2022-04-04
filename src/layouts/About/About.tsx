import './About.scss';
import about from './about.jpg';
import { useMediaQuery } from 'react-responsive';

const About = () => {
  const isTablet = useMediaQuery({
    query: '(max-width: 790px)',
  });

  const isMobile = useMediaQuery({
    query: '(max-width: 600px)',
  });

  let aboutImage: string;

  if (isMobile) {
    aboutImage = '/assets/shared/mobile/image-best-gear.jpg';
  } else if (isTablet) {
    aboutImage = '/assets/shared/tablet/image-best-gear.jpg';
  } else {
    aboutImage = about;
  }

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
      <div className="about__image">
        <img src={aboutImage} alt="About" />
      </div>
    </section>
  );
};

export default About;
