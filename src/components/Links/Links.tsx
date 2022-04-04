import { Link } from 'react-router-dom';
import './Links.scss';

interface LinksProps {
  style?: object;
}

const Links = ({ style }: LinksProps) => {
  const renderStyles = () => {
    let styles: React.CSSProperties = {};
    if (style) {
      styles = style;
    }
    return styles;
  };

  return (
    <div style={renderStyles()} className="links">
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
