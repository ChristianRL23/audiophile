import './Modal.scss';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart';

const Backdrop = () => {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => dispatch(cartActions.closeCart())}
      className="backdrop"
    />
  );
};

const ModalOverlay = ({ children }: any) => {
  return (
    <div className="modal">
      <div>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays')!;

const Modal = ({ children }: any) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
