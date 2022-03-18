import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import './Cart.scss';

const Cart = () => {
  return (
    <Modal>
      <div className="cart">
        <div className="cart__header">
          <h5>CART (3)</h5>
          <h6>Remove all</h6>
        </div>
        <div className="cart__item"></div>
        <div className="cart__total">
          <h6>TOTAL</h6>
          <h5>$5,396</h5>
        </div>
        <Button color="orange" textContent="CHECKOUT" />
      </div>
    </Modal>
  );
};

export default Cart;
