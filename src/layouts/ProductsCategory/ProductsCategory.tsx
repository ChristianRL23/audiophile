import ProductsCategoryItem from '../../components/ProductsCategoryItem/ProductsCategoryItem';
import './ProductsCategory.scss';
import categoryHeadphones from './categoryheadphones.png';
import categoryEarphones from './categoryearphones.png';
import categorySpeakers from './categoryspeakers.png';

const ProductsCategory = () => {
  return (
    <section className="products-category">
      <ProductsCategoryItem image={categoryHeadphones} name="HEADPHONES" />
      <ProductsCategoryItem image={categorySpeakers} name="SPEAKERS" />
      <ProductsCategoryItem image={categoryEarphones} name="EARPHONES" />
    </section>
  );
};

export default ProductsCategory;
