import Links from '../Links/Links';
import './Footer.scss';
import logo from './logo.svg';
import iconFacebook from './icon-facebook.svg';
import iconInstagram from './icon-instagram.svg';
import iconTwitter from './icon-twitter.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__left">
        <img src={logo} alt="Logo" />
        <p>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we're open 7 days a week.
        </p>
        <h6>Copyright 2022. All Rights Reserved</h6>
      </div>
      <div className="footer__right">
        <Links />
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
