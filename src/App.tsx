import { useEffect, useLayoutEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.scss';
import Cart from './components/Cart/Cart';
import OrderModal from './components/OrderModal/OrderModal';
import Category from './layouts/Category/Category';
import Checkout from './layouts/Checkout/Checkout';
import Home from './layouts/Home/Home';
import NotFound from './layouts/NotFound/NotFound';
import Product from './layouts/Product/Product';
import { cartActions } from './store/cart';
import NoEmptyCart from './utils/NoEmptyCart';

const Wrapper = ({ children }: any) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

  return children;
};

function App() {
  const dispatch = useDispatch();
  const cartState = useSelector((state: RootStateOrAny) => state.cart);
  const { products: cartProducts } = cartState;
  const orderModalState = useSelector(
    (state: RootStateOrAny) => state.orderModal
  );

  useEffect(() => {
    const cartProductsLocalStorage = JSON.parse(
      localStorage.getItem('cartProducts')!
    );
    if (cartProducts !== null) {
      dispatch(cartActions.saveProducts(cartProductsLocalStorage));
    } else {
      dispatch(cartActions.saveProducts([]));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
  }, [cartProducts]);

  return (
    <Wrapper>
      {cartState.displayed && <Cart type="cart" />}
      {orderModalState.displayed && <OrderModal type="order" />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:category" element={<Category />} />
        <Route path="/:category/:product" element={<Product />} />
        <Route
          path="/checkout"
          element={
            <NoEmptyCart>
              <Checkout />
            </NoEmptyCart>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Wrapper>
  );
}

export default App;
