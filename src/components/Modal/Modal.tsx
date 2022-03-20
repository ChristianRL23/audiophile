import './Modal.scss';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart';
import { orderModalActions } from './../../store/orderModal';

const Backdrop = ({ type }: any) => {
  const dispatch = useDispatch();

  const closeCartModal = () => dispatch(cartActions.closeCart());
  const closeOrderModal = () => dispatch(orderModalActions.close());

  return (
    <div
      onClick={type === 'cart' ? closeCartModal : closeOrderModal}
      className="backdrop"
    />
  );
};

const ModalOverlay = ({ children, type }: any) => {
  return (
    <div className={`modal--${type}`}>
      <div>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays')!;

const Modal = ({ children, type }: any) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop type={type} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay type={type}>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
