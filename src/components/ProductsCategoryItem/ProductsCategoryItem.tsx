import './ProductsCategoryItem.scss';
import arrowRight from './icon-arrow-right.svg';

interface ProductsCategoryItemProps {
  name: string;
  image: string;
}

const ProductsCategoryItem = ({ name, image }: ProductsCategoryItemProps) => {
  return (
    <div className="products-category-item">
      <div className="products-category-item__content">
        <img
          className="products-category-item__content__image"
          src={image}
          alt="Product"
        />
        <h5>{name}</h5>
        <div className="products-category-item__content__shop-link">
          <h6>SHOP</h6>
          <img src={arrowRight} alt="Arrow" />
        </div>
      </div>
      <div className="products-category-item__color" />
    </div>
  );
};

export default ProductsCategoryItem;
