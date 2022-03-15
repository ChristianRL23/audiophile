import './Button.scss';

interface ButtonProps {
  color: 'orange' | 'white' | 'black' | 'transparent';
  textContent: string;
  style?: object;
}

const Button = ({ color, textContent, style }: ButtonProps) => {
  return (
    <button style={style} className={`button--${color}`}>
      {textContent}
    </button>
  );
};

export default Button;
