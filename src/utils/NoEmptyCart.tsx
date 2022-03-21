import { useEffect } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const NoEmptyCart = ({ children }: { children: JSX.Element }) => {
  const cartState = useSelector((state: RootStateOrAny) => state.cart.products);
  const cartIsEmpty = cartState.length === 0;
  const navigate = useNavigate();

  useEffect(() => {
    if (cartIsEmpty) {
      navigate(-1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (cartIsEmpty) {
    return null;
  } else {
    return children;
  }
};
export default NoEmptyCart;
