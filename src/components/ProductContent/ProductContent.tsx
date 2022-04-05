import { useLocation, useNavigate } from 'react-router-dom';
import data from './../../data/data.json';
import './ProductContent.scss';
import { ProductModel } from '../../models';
import Button from '../Button/Button';
import IndividualProduct from '../IndividualProduct/IndividualProduct';
import { useMediaQuery } from 'react-responsive';

const ProductContent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const productData: ProductModel[] = data;
  const productSelected = productData.find(
    (product) => product.slug === location.pathname
  );
  const isTablet = useMediaQuery({
    query: '(max-width: 715px)',
  });

  const isPhone = useMediaQuery({
    query: '(max-width: 623px)',
  });

  return (
    <section className="product-content">
      <IndividualProduct
        name={productSelected!.name}
        description={productSelected!.description}
        isNew={productSelected!.new}
        image={
          isTablet
            ? productSelected!.image.mobile
            : productSelected!.image.desktop
        }
        cartImage={productSelected!.cartImage}
        price={productSelected!.price}
      />
      <div className="product-content__features">
        <div className="product-content__features__features">
          <h3>FEATURES</h3>
          <p>{productSelected!.features}</p>
        </div>
        <div className="product-content__features__content">
          <h3>IN THE BOX</h3>
          <div className="product-content__features__content__items">
            {productSelected?.includes.map((feature) => (
              <div key={Math.random().toString(16).slice(2)}>
                <h6>{feature.quantity}x</h6>
                <p>{feature.item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="product-content__gallery">
        <img
          src={
            isTablet
              ? productSelected!.gallery.first.mobile
              : productSelected!.gallery.first.desktop
          }
          alt="Product"
        />
        <img
          src={
            isTablet
              ? productSelected!.gallery.second.mobile
              : productSelected!.gallery.second.desktop
          }
          alt="Product"
        />
        <img
          src={
            isTablet
              ? productSelected!.gallery.third.mobile
              : productSelected!.gallery.third.desktop
          }
          alt="Product"
        />
      </div>
      <div className="product-content__others">
        <h3>YOU MAY ALSO LIKE</h3>
        <div className="product-content__others__items">
          {productSelected!.others.map((product) => {
            let image: string;

            if (isPhone) {
              image = product.image.mobile;
            } else if (isTablet) {
              image = product.image.tablet;
            } else {
              image = product.image.desktop;
            }

            return (
              <div
                key={Math.random().toString(16).slice(2)}
                className="product-content__others__items__item"
              >
                <img src={image} alt="Other product" />
                <h4>{product.name}</h4>
                <Button
                  onClick={() => navigate(`${product.slug}`)}
                  color="orange"
                  textContent="SEE PRODUCT"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductContent;
