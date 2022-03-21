import './Modal.scss';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart';

const Backdrop = () => {
  const dispatch = useDispatch();

  const closeCartModal = () => dispatch(cartActions.closeCart());

  return <div onClick={closeCartModal} className="backdrop" />;
};

interface ModalProps {
  children: JSX.Element;
  type: string;
}

const ModalOverlay = ({ children, type }: ModalProps) => {
  return (
    <div className={`modal--${type}`}>
      <div>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays')!;

const Modal = ({ children, type }: ModalProps) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay type={type}>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
