import React, { useState } from 'react';
import './InputNumber.scss';

const InputNumber = () => {
  const [inputValue, setInputValue] = useState<number>(1);

  const changeNumber = (operation: 'minus' | 'plus') => {
    if (operation === 'minus') {
      if (inputValue === 1) {
        return;
      }
      setInputValue((lastState) => --lastState);
    } else {
      if (inputValue === 10) {
        return;
      }
      setInputValue((lastState) => ++lastState);
    }
  };

  const changeInputNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(Number(e.target.value));
  };

  const verifyInputNumber = () => {
    if (inputValue < 1) {
      setInputValue(1);
    } else if (inputValue > 10) {
      setInputValue(10);
    }
  };

  return (
    <div className="input-number">
      <h6
        onClick={changeNumber.bind(null, 'minus')}
        className="input-number__minus"
      >
        -
      </h6>
      <input
        onBlur={verifyInputNumber}
        onChange={changeInputNumber}
        value={inputValue}
        type="number"
      />
      <h6
        onClick={changeNumber.bind(null, 'plus')}
        className="input-number__plus"
      >
        +
      </h6>
    </div>
  );
};

export default InputNumber;
