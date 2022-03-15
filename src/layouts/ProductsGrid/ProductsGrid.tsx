import './ProductsGrid.scss';
import speaker1 from './speaker-1.png';
import speaker2 from './speaker-2.jpg';
import earphones from './earphones.jpg';
import Button from '../../components/Button/Button';

const ProductsGrid = () => {
  return (
    <section className="products-grid">
      <div className="products-grid__product--speaker-1">
        <img src={speaker1} alt="Speaker" />
        <div className="products-grid__product--speaker-1__text">
          <h4>ZX9 SPEAKER</h4>
          <p>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Button color="black" textContent="SEE PRODUCT" />
        </div>
      </div>
      <div className="products-grid__product--speaker-2"></div>
      <div className="products-grid__product--earphones-image"></div>
      <div className="products-grid__product--earphones-cta">
        <h5>YX1 EARPHONES</h5>
        <Button color="white" textContent="SEE PRODUCT" />
      </div>
    </section>
  );
};

export default ProductsGrid;
