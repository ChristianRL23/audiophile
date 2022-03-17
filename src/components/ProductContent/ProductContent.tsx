import { useLocation } from 'react-router-dom';
import data from './../../data/data.json';
import ProductItem from '../../components/ProductItem/ProductItem';
import './ProductContent.scss';
import { ProductModel } from '../../models';

const ProductContent = () => {
  const location = useLocation();
  const productData: ProductModel[] = data;
  const productSelected = productData.find(
    (product) => product.slug === location.pathname
  );
  console.log(productSelected);

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
    </section>
  );
};

export default ProductContent;
