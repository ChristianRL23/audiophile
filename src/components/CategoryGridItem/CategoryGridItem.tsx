import Button from '../Button/Button';
import './CategoryGridItem.scss';

interface CategoryGridItemProps {
  name: string;
  description: string;
  isNew?: boolean;
  image: string;
}

const CategoryGridItem = ({
  image,
  name,
  isNew,
  description,
}: CategoryGridItemProps) => {
  const productNameArr = name.split(' ');
  const keywordIndex = productNameArr.findIndex(
    (word) => word === 'Headphones'
  );
  const productSpanText = productNameArr.slice(0, keywordIndex).join(' ');
  const productNameStyled = (
    <h4 className="category-grid-item__content__text__name">
      <span>{productSpanText}</span>
      {productNameArr[keywordIndex]}
    </h4>
  );

  return (
    <div className="category-grid-item">
      <img src={image} alt="" />
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
