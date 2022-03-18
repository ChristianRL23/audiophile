import { useLocation } from 'react-router-dom';
import data from './../../data/data.json';
import ProductItem from '../../components/ProductItem/ProductItem';
import './ProductContent.scss';
import { ProductModel } from '../../models';

//TODO: FIX THE WIDTH (130%) AND  DE LINE /n

const ProductContent = () => {
  const location = useLocation();
  const productData: ProductModel[] = data;
  const productSelected = productData.find(
    (product) => product.slug === location.pathname
  );
  console.log(JSON.stringify(productSelected!.features));

  return (
    <section className="product-content">
      <ProductItem
        name={productSelected!.name}
        description={productSelected!.description}
        gridItem={false}
        isNew={productSelected!.new}
        image={productSelected!.image.desktop}
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
              <div>
                <h6>{feature.quantity}x</h6>
                <p>{feature.item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="product-content__gallery">
        <img src={productSelected!.gallery.first.desktop} alt="Product" />
        <img src={productSelected!.gallery.second.desktop} alt="Product" />
        <img src={productSelected!.gallery.third.desktop} alt="Product" />
      </div>
    </section>
  );
};

export default ProductContent;
