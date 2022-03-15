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
          <h4>
            <span>ZX9</span>
            SPEAKER
          </h4>
          <p>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Button
            style={{ alignSelf: 'flex-start' }}
            color="black"
            textContent="SEE PRODUCT"
          />
        </div>
      </div>
      <div className="products-grid__product--speaker-2">
        <div className="products-grid__product--speaker-2__text">
          <h5>ZX7 SPEAKER</h5>
          <Button
            style={{ alignSelf: 'flex-start' }}
            color="transparent"
            textContent="SEE PRODUCT"
          />
        </div>
      </div>
      <div className="products-grid__product--earphones-image"></div>
      <div className="products-grid__product--earphones-cta">
        <div className="products-grid__product--earphones-cta__text">
          <h5>YX1 EARPHONES</h5>
          <Button
            style={{ alignSelf: 'flex-start' }}
            color="transparent"
            textContent="SEE PRODUCT"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductsGrid;
