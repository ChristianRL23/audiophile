import { Link } from 'react-router-dom';
import './Links.scss';

const Links = () => {
  return (
    <div className="links">
      <Link className="links__link" to="/">
        HOME
      </Link>
      <Link className="links__link" to="/headphones">
        HEADPHONES
      </Link>
      <Link className="links__link" to="/speakers">
        SPEAKERS
      </Link>
      <Link className="links__link" to="/earphones">
        EARPHONES
      </Link>
    </div>
  );
};

export default Links;
