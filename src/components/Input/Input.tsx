import './Input.scss';

interface InputProps {
  placeholder?: string;
  label: string;
  size: 'short' | 'long';
  type: 'number' | 'text' | 'radio' | 'password';
  radioLabel?: string;
  onClick?: () => void;
  radioSelected?: boolean;
  onChange?: any;
  error?: string;
  value?: string;
}

const Input = ({
  label,
  placeholder,
  size,
  type,
  radioLabel,
  onClick,
  radioSelected,
  onChange,
  error,
  value,
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
        <div className="input__labels">
          <label
            className={`input__labels__label${error !== '' ? '--error' : ''}`}
            htmlFor={label}
          >
            {label}
          </label>
          {error !== '' && <h6 className="input__labels__error">{error}</h6>}
        </div>
        <input
          value={value}
          className={`input__input${error !== '' ? '--error' : ''}`}
          onChange={onChange}
          type={type}
          id={label}
          placeholder={placeholder}
        />
      </div>
    );
  }
};

export default Input;
