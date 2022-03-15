import './Header.scss';
import logo from './logo.svg';
import cartIcon from './icon-cart.svg';
import Links from '../Links/Links';

import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const goBackToHomepage = () => navigate('/');

  return (
    <header className="header">
      <div onClick={goBackToHomepage} className="header__logo">
        <img src={logo} alt="Logo" />
      </div>
      <Links />
      <div className="header__cart-icon">
        <img src={cartIcon} alt="Cart" />
      </div>
    </header>
  );
};

export default Header;
