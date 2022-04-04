import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import './Hero.scss';

const Hero = () => {
  const navigate = useNavigate();

  const heroCenter = useMediaQuery({
    query: '(max-width: 1200px)',
  });

  return (
    <section className="hero">
      <div className="hero__content">
        <h6 className="hero__content__label">NEW PRODUCT</h6>
        <h2 className="hero__content__product-name">XX99 Mark II Headphones</h2>
        <p className="hero__content__product-description">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Button
          onClick={() => navigate('/headphones/xx99-mark-two')}
          style={{ alignSelf: `${heroCenter ? 'center' : 'flex-start'}` }}
          color="orange"
          textContent="SEE PRODUCT"
        />
      </div>
    </section>
  );
};

export default Hero;
