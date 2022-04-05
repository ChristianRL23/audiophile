import { slide as Burger, Item } from 'burger-menu';
import 'burger-menu/lib/index.css';
import './Header.scss';
import logo from './logo.svg';
import cartIcon from './icon-cart.svg';
import Links from '../Links/Links';

import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const goBackToHomepage = () => navigate('/');
  const [burgerMenuIsOpen, setBurgerMenuIsOpen] = useState(false);
  const navigateFromLink = (to: string) => {
    navigate(to);
    setBurgerMenuIsOpen(false);
  };

  const isTablet = useMediaQuery({
    query: '(max-width: 820px)',
  });

  const isPhone = useMediaQuery({
    query: '(max-width: 700px)',
  });

  return (
    <header className="header">
      <div onClick={goBackToHomepage} className="header__logo">
        <img src={logo} alt="Logo" />
      </div>
      {isTablet ? (
        <div className="header__hamburger">
          <img
            onClick={() => setBurgerMenuIsOpen(true)}
            src="/assets/shared/tablet/icon-hamburger.svg"
            alt="Hamburger icon"
          />
        </div>
      ) : (
        <Links />
      )}
      <Burger
        left
        className="burger-menu"
        isOpen={burgerMenuIsOpen}
        onClose={() => setBurgerMenuIsOpen(false)}
        width={isPhone ? 200 : 300}
      >
        <>
          <Item
            onClick={navigateFromLink.bind(null, '/')}
            itemKey="home"
            text="HOME"
          />
          <Item
            onClick={navigateFromLink.bind(null, '/headphones')}
            itemKey="headphones"
            text="HEADPHONES"
          />
          <Item
            onClick={navigateFromLink.bind(null, '/speakers')}
            itemKey="speakers"
            text="SPEAKERS"
          />
          <Item
            onClick={navigateFromLink.bind(null, '/earphones')}
            itemKey="earphones"
            text="EARPHONES"
          />
        </>
      </Burger>
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
