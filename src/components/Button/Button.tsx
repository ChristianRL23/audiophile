import './Button.scss';

interface ButtonProps {
  color: 'orange' | 'white' | 'black' | 'transparent';
  textContent: string;
  style?: object;
  onClick?: any;
}

const Button = ({ color, textContent, style, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} style={style} className={`button--${color}`}>
      {textContent}
    </button>
  );
};

export default Button;
