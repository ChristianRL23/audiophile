import './Button.scss';

interface ButtonProps {
  color: 'orange' | 'white';
  textContent: string;
}

const Button = ({ color, textContent }: ButtonProps) => {
  return <button className={`button--${color}`}>{textContent}</button>;
};

export default Button;
