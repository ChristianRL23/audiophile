import './ProductsGrid.scss';
import speaker1 from './speaker-1.png';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';

const ProductsGrid = () => {
  const navigate = useNavigate();

  const seeProduct1 = () => navigate('/speakers/zx9');
  const seeProduct2 = () => navigate('/speakers/zx7');
  const seeProduct3 = () => navigate('/earphones/yx1');

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
            onClick={seeProduct1}
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
            onClick={seeProduct2}
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
            onClick={seeProduct3}
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
