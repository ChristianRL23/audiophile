import { useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ProductCartModel } from '../../models';
import { cartActions } from '../../store/cart';

import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';
import Modal from '../Modal/Modal';
import './Cart.scss';

interface CartProps {
  type: string;
}

const Cart = ({ type }: CartProps) => {
  const navigate = useNavigate();
  const [cartTotalItems, setCartTotalItems] = useState<number>(0);
  const [cartTotalToPay, setCartTotalToPay] = useState<number>(0);
  const cartProductsState: ProductCartModel[] = useSelector(
    (state: RootStateOrAny) => state.cart.products
  );
  const dispatch = useDispatch();

  const goToCheckout = () => {
    navigate('/checkout');
    dispatch(cartActions.closeCart());
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
    <Modal type={type}>
      <div className="cart">
        {cartProductsState.length === 0 ? (
          <h2 className="cart__empty">THE CART IS EMPTY</h2>
        ) : (
          <>
            <div className="cart__header">
              <h5>CART ({cartTotalItems})</h5>
              <h6 onClick={() => dispatch(cartActions.removeAllProducts())}>
                Remove all
              </h6>
            </div>
            <div className="cart__items">
              {cartProductsState.map((product) => (
                <CartItem
                  key={Date.now() + Math.random()}
                  name={product.name}
                  price={product.price!}
                  quantity={product.quantity}
                  image={product.image}
                  cart
                />
              ))}
            </div>
            <div className="cart__total">
              <h6>TOTAL</h6>
              <h5>
                $
                {cartTotalToPay
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </h5>
            </div>
            <Button
              onClick={goToCheckout}
              color="orange"
              textContent="CHECKOUT"
            />
          </>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
