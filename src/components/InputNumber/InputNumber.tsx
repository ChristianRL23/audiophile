import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart';
import './InputNumber.scss';

interface InputNumberProps {
  children?: React.ReactNode;
  value: string;
  cartItem?: string;
}

const InputNumber = React.forwardRef<HTMLInputElement, InputNumberProps>(
  (props, ref) => {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState<number>(Number(props.value));

    const changeNumber = (operation: 'minus' | 'plus') => {
      if (operation === 'minus') {
        if (inputValue === 1 && props.cartItem) {
          dispatch(cartActions.deleteProduct(props.cartItem));
          return;
        } else if (inputValue === 1) {
          return;
        }
        setInputValue((lastState) => --lastState);
        if (props.cartItem) {
          dispatch(cartActions.removeQuantity(props.cartItem));
        }
      } else {
        if (inputValue === 10) {
          return;
        }
        setInputValue((lastState) => ++lastState);
        if (props.cartItem) {
          dispatch(cartActions.addQuantity(props.cartItem));
        }
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
          ref={ref}
          onBlur={verifyInputNumber}
          onChange={changeInputNumber}
          value={inputValue}
          type="number"
          readOnly={true}
        />
        <h6
          onClick={changeNumber.bind(null, 'plus')}
          className="input-number__plus"
        >
          +
        </h6>
      </div>
    );
  }
);

export default InputNumber;
