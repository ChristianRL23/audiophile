import { createRef } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Slide, ToastContainer } from 'react-toastify';
import { cartActions } from '../../store/cart';
import Button from '../Button/Button';
import InputNumber from '../InputNumber/InputNumber';
import './IndividualProduct.scss';

interface IndividualProductProps {
  name: string;
  description: string;
  isNew: boolean;
  image: string;
  cartImage: string;
  price: number;
  cartName: string;
}

const IndividualProduct = ({
  name,
  description,
  isNew,
  image,
  cartImage,
  price,
  cartName,
}: IndividualProductProps) => {
  const params = useParams();
  const dispatch = useDispatch();
  const inputProductQuantityRef = createRef<HTMLInputElement>();

  let categoryProductName = params.category!;
  categoryProductName =
    categoryProductName.charAt(0).toUpperCase() + categoryProductName.slice(1);
  const productNameArr = name.split(' ');
  const keywordIndex = productNameArr.findIndex(
    (word) => word === categoryProductName || word === 'Speaker'
  );
  const productSpanText = productNameArr.slice(0, keywordIndex).join(' ');

  const addProductToCart = () => {
    dispatch(
      cartActions.addProduct({
        name: cartName,
        image: cartImage!,
        price,
        quantity: Number(inputProductQuantityRef.current!.value),
      })
    );
  };

  const productNameStyled = (
    <h4 className="individual-product__content__text__name">
      <span>{productSpanText}</span>
      {productNameArr[keywordIndex]}
    </h4>
  );

  return (
    <div className="individual-product">
      <div className="individual-product__image">
        <img src={image} alt="Product" />
      </div>
      <div className="individual-product__content">
        <div className="individual-product__content__text">
          {isNew && (
            <h6 className="individual-product__content__text__label">
              NEW PRODUCT
            </h6>
          )}
          {productNameStyled}
          <p className="individual-product__content__text__description">
            {description}
          </p>
          <h6 className="individual-product__content__text__price">
            ${price!.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </h6>
          <div className="individual-product__content__text__buttons">
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
        </div>
      </div>
    </div>
  );
};

export default IndividualProduct;
