import './Input.scss';

interface InputProps {
  placeholder?: string;
  label: string;
  size: 'short' | 'long';
  type: 'number' | 'text' | 'radio';
  radioLabel?: string;
  onClick?: () => void;
  radioSelected?: boolean;
}

const Input = ({
  label,
  placeholder,
  size,
  type,
  radioLabel,
  onClick,
  radioSelected,
}: InputProps) => {
  if (type === 'radio') {
    return (
      <>
        <div className="input--radio__container">
          <h6
            className={`input--radio__container__label--${
              radioLabel ? 'no-hidden' : 'hidden'
            }`}
          >
            {radioLabel || 'Label'}
          </h6>
          <div
            onClick={onClick}
            className={`input--radio__container__input--${
              radioSelected ? 'selected' : 'no-selected'
            }`}
          >
            <div
              className={`input--radio__container__input__outer-circle--${
                radioSelected ? 'selected' : 'no-selected'
              }`}
            >
              <div />
            </div>
            <h5>{label}</h5>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className={`input--${size}`}>
        <label htmlFor={label}>{label}</label>
        <input type={type} id={label} placeholder={placeholder} />
      </div>
    );
  }
};

export default Input;
