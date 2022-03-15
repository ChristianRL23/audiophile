import './Header.scss';
import logo from './logo.svg';
import cartIcon from './icon-cart.svg';
import Links from '../Links/Links';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
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
