import { useLayoutEffect } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.scss';
import Cart from './components/Cart/Cart';
import Category from './layouts/Category/Category';
import Checkout from './layouts/Checkout/Checkout';
import Home from './layouts/Home/Home';
import Product from './layouts/Product/Product';

const Wrapper = ({ children }: any) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

  return children;
};

function App() {
  const cartState = useSelector((state: RootStateOrAny) => state.cart);

  return (
    <Wrapper>
      {cartState.displayed && <Cart />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:category" element={<Category />} />
        <Route path="/:category/:product" element={<Product />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Wrapper>
  );
}

export default App;
