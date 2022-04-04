import { useNavigate, useParams } from 'react-router-dom';
import Button from '../Button/Button';
import './ProductItem.scss';
import 'react-toastify/dist/ReactToastify.css';

interface ProductItemProps {
  name: string;
  description: string;
  isNew?: boolean;
  image: string;
  direction?: 'right' | 'left';
  slug?: string;
}

const ProductItem = ({
  image,
  name,
  isNew,
  description,
  direction = 'right',
  slug,
}: ProductItemProps) => {
  const params = useParams();
  const navigate = useNavigate();
  let categoryProductName = params.category!;
  categoryProductName =
    categoryProductName.charAt(0).toUpperCase() + categoryProductName.slice(1);
  const productNameArr = name.split(' ');
  const keywordIndex = productNameArr.findIndex(
    (word) => word === categoryProductName || word === 'Speaker'
  );
  const productSpanText = productNameArr.slice(0, keywordIndex).join(' ');
  const productNameStyled = (
    <h4 className="product-item__content__text__name">
      <span>{productSpanText}</span>
      {productNameArr[keywordIndex]}
    </h4>
  );

  const openProductLayout = () => navigate(`${slug}`);

  return (
    <div className={`product-item--${direction}`}>
      <div className="product-item__image">
        <img src={image} alt="Product" />
      </div>
      <div className="product-item__content">
        <div className="product-item__content__text">
          {isNew && (
            <h6 className="product-item__content__text__label">NEW PRODUCT</h6>
          )}
          {productNameStyled}
          <p className="product-item__content__text__description">
            {description}
          </p>
          <Button
            onClick={openProductLayout}
            color="orange"
            textContent="SEE PRODUCT"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
