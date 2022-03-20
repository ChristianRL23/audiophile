import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import './OrderModal.scss';
import checkIcon from './Group 12.png';
import OrderResume from '../OrderResume/OrderResume';
import { RootStateOrAny, useSelector } from 'react-redux';
import { ProductCartModel } from '../../models';

const OrderModal = ({ type }: any) => {
  const cartState: ProductCartModel[] = useSelector(
    (state: RootStateOrAny) => state.cart.products
  );

  return (
    <Modal type={type}>
      <div className="order-modal">
        <img className="order-modal__icon" src={checkIcon} alt="Check" />
        <h2 className="order-modal__title">
          <span>THANK YOU</span>
          FOR YOUR ORDER
        </h2>
        <p className="order-modal__paragraph">
          You will receive an email confirmation shortly.
        </p>
        <OrderResume arrCartProducts={cartState} />
        <Button
          style={{ marginTop: '1.5rem' }}
          color="orange"
          textContent="BACK TO HOME"
        />
      </div>
    </Modal>
  );
};

export default OrderModal;
