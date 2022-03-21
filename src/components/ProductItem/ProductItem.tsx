import { createRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { cartActions } from '../../store/cart';
import Button from '../Button/Button';
import InputNumber from '../InputNumber/InputNumber';
import './ProductItem.scss';
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ProductItemProps {
  name: string;
  description: string;
  isNew?: boolean;
  image: string;
  direction?: 'right' | 'left';
  price?: number;
  gridItem: boolean;
  slug?: string;
  cartImage?: string;
}

const ProductItem = ({
  image,
  name,
  isNew,
  description,
  direction = 'right',
  price,
  gridItem,
  slug,
  cartImage,
}: ProductItemProps) => {
  const dispatch = useDispatch();
  const inputProductQuantityRef = createRef<HTMLInputElement>();
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

  const addProductToCart = () => {
    dispatch(
      cartActions.addProduct({
        name,
        image: cartImage!,
        price,
        quantity: Number(inputProductQuantityRef.current!.value),
      })
    );
  };

  return (
    <div className={`product-item--${direction}`}>
      <img src={image} alt="Product" />
      <div className="product-item__content">
        <div className="product-item__content__text">
          {isNew && (
            <h6 className="product-item__content__text__label">NEW PRODUCT</h6>
          )}
          {productNameStyled}
          <p className="product-item__content__text__description">
            {description}
          </p>
          {!gridItem && (
            <h6 className="product-item__content__text__price">
              ${price!.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </h6>
          )}
          {gridItem ? (
            <Button
              onClick={openProductLayout}
              color="orange"
              textContent="SEE PRODUCT"
            />
          ) : (
            <div className="product-item__content__text__buttons">
              <InputNumber value="1" ref={inputProductQuantityRef} />
              <Button
                onClick={addProductToCart}
                color="orange"
                textContent="ADD TO CART"
              />
              <ToastContainer
                transition={Slide}
                position="bottom-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                progressClassName="toastProgress"
                bodyClassName="toastBody"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
