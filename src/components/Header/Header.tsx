import './Header.scss';
import logo from './logo.svg';
import cartIcon from './icon-cart.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="header__links">
        <a className="header__links__link" href="#">
          HOME
        </a>
        <a className="header__links__link" href="#">
          HEADPHONES
        </a>
        <a className="header__links__link" href="#">
          SPEAKERS
        </a>
        <a className="header__links__link" href="#">
          EARPHONES
        </a>
      </div>
      <div className="header__cart-icon">
        <img src={cartIcon} alt="Cart" />
      </div>
    </header>
  );
};

export default Header;
