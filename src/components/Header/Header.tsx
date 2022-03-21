import './Header.scss';
import logo from './logo.svg';
import cartIcon from './icon-cart.svg';
import Links from '../Links/Links';

import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const goBackToHomepage = () => navigate('/');

  return (
    <header className="header">
      <div onClick={goBackToHomepage} className="header__logo">
        <img src={logo} alt="Logo" />
      </div>
      <Links />
      <div className="header__cart-icon">
        <img
          style={location.pathname === '/checkout' ? { display: 'none' } : {}}
          onClick={() => dispatch(cartActions.openCart())}
          src={cartIcon}
          alt="Cart"
        />
      </div>
    </header>
  );
};

export default Header;
