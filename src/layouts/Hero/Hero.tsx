import Button from '../../components/Button/Button';
import './Hero.scss';

const Hero = () => {
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
          style={{ alignSelf: 'flex-start' }}
          color="orange"
          textContent="SEE PRODUCT"
        />
      </div>
    </section>
  );
};

export default Hero;
