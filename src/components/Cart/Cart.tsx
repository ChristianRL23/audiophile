import { useEffect, useState } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { ProductCartModel } from '../../models';

import Button from '../Button/Button';
import InputNumber from '../InputNumber/InputNumber';
import Modal from '../Modal/Modal';
import './Cart.scss';

const Cart = () => {
  const [cartTotalItems, setCartTotalItems] = useState<number>(0);
  const [cartTotalToPay, setCartTotalToPay] = useState<number>(0);
  const cartProductsState: ProductCartModel[] = useSelector(
    (state: RootStateOrAny) => state.cart.products
  );

  const generateProductNameForCart = (productName: string) => {
    const lastIndex = productName.lastIndexOf(' ');
    return productName.substring(0, lastIndex);
  };

  useEffect(() => {
    const items = cartProductsState.map((product) => product.quantity);
    const itemsSum = items.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
    const totalToPayArr = cartProductsState.map((product) => {
      return product.quantity * product.price!;
    });
    const totalToPaySum = totalToPayArr.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );

    setCartTotalItems(itemsSum);
    setCartTotalToPay(totalToPaySum);
  }, [cartProductsState]);

  return (
    <Modal>
      <div className="cart">
        <div className="cart__header">
          <h5>CART ({cartTotalItems})</h5>
          <h6>Remove all</h6>
        </div>
        <div className="cart__items">
          {cartProductsState.map((product) => (
            <div className="cart__items__item">
              <div className="cart__items__item__left">
                <img src={product.image} alt="Product cart item" />
                <div>
                  <h5>{generateProductNameForCart(product.name)}</h5>
                  <h6>
                    $
                    {product
                      .price!.toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </h6>
                </div>
              </div>
              <InputNumber
                cartItem={product.name}
                value={product.quantity.toString()}
              />
            </div>
          ))}
        </div>
        <div className="cart__total">
          <h6>TOTAL</h6>
          <h5>
            ${cartTotalToPay.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </h5>
        </div>
        <Button color="orange" textContent="CHECKOUT" />
      </div>
    </Modal>
  );
};

export default Cart;
