import Links from '../Links/Links';
import './Footer.scss';
import logo from './logo.svg';
import iconFacebook from './icon-facebook.svg';
import iconInstagram from './icon-instagram.svg';
import iconTwitter from './icon-twitter.svg';
import { useMediaQuery } from 'react-responsive';

const Footer = () => {
  const isTablet = useMediaQuery({
    query: '(max-width: 850px)',
  });

  const isPhone = useMediaQuery({
    query: '(max-width: 450px)',
  });

  return (
    <footer className="footer">
      <div className="footer__left">
        <img src={logo} alt="Logo" />
        {isPhone ? (
          <Links style={{ flexDirection: 'column', gap: '1.5rem' }} />
        ) : (
          isTablet && <Links />
        )}

        <p>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we're open 7 days a week.
        </p>
        <h6>Copyright 2022. All Rights Reserved</h6>
      </div>
      <div className="footer__right">
        {!isTablet && <Links />}
        <div className="footer__right__social-media">
          <img src={iconFacebook} alt="Facebook" />
          <img src={iconTwitter} alt="Twitter" />
          <img src={iconInstagram} alt="Instagram" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
