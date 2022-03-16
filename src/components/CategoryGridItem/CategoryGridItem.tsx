import { useParams } from 'react-router-dom';
import Button from '../Button/Button';
import './CategoryGridItem.scss';

interface CategoryGridItemProps {
  name: string;
  description: string;
  isNew?: boolean;
  image: string;
  direction: 'right' | 'left';
}

const CategoryGridItem = ({
  image,
  name,
  isNew,
  description,
  direction,
}: CategoryGridItemProps) => {
  const params = useParams();
  let categoryProductName = params.category!;
  categoryProductName =
    categoryProductName.charAt(0).toUpperCase() + categoryProductName.slice(1);
  const productNameArr = name.split(' ');
  const keywordIndex = productNameArr.findIndex(
    (word) => word === categoryProductName || word === 'Speaker'
  );
  const productSpanText = productNameArr.slice(0, keywordIndex).join(' ');
  const productNameStyled = (
    <h4 className="category-grid-item__content__text__name">
      <span>{productSpanText}</span>
      {productNameArr[keywordIndex]}
    </h4>
  );

  return (
    <div className={`category-grid-item--${direction}`}>
      <img src={image} alt="Product" />
      <div className="category-grid-item__content">
        <div className="category-grid-item__content__text">
          {isNew && (
            <h6 className="category-grid-item__content__text__label">
              NEW PRODUCT
            </h6>
          )}
          {productNameStyled}
          <p className="category-grid-item__content__text__description">
            {description}
          </p>
          <Button color="orange" textContent="SEE PRODUCT" />
        </div>
      </div>
    </div>
  );
};

export default CategoryGridItem;
