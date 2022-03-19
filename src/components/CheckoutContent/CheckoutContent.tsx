import { useState } from 'react';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import Input from '../Input/Input';
import './CheckoutContent.scss';
import deliveryIcon from './Shape.svg';

const CheckoutContent = () => {
  const [firstRadioSelected, setFirstRadioSelected] = useState<boolean>(true);
  const [secondRadioSelected, setSecondRadioSelected] =
    useState<boolean>(false);

  const selectFirstRadio = () => {
    setFirstRadioSelected(true);
    setSecondRadioSelected(false);
  };
  const selectSecondRadio = () => {
    setSecondRadioSelected(true);
    setFirstRadioSelected(false);
  };

  return (
    <section className="checkout-content">
      <div className="checkout-content__left">
        <h2>CHECKOUT</h2>
        <div className="checkout-content__left__forms">
          <CheckoutForm name="BILLING DETAILS">
            <>
              <Input
                type="text"
                size="short"
                label="Name"
                placeholder="Alexei Ward"
              />
              <Input
                type="text"
                size="short"
                label="Email Address"
                placeholder="alexei@mail.com"
              />
              <Input
                type="number"
                size="short"
                label="Phone Number"
                placeholder="+1 202-555-0136"
              />
            </>
          </CheckoutForm>
          <CheckoutForm name="SHIPPING INFO">
            <>
              <Input
                type="text"
                size="long"
                label="Address"
                placeholder="1137 Williams Avenue"
              />
              <Input
                type="number"
                size="short"
                label="ZIP Code"
                placeholder="10001"
              />
              <Input
                type="text"
                size="short"
                label="City"
                placeholder="New York"
              />
              <Input
                type="text"
                size="short"
                label="Country"
                placeholder="United States"
              />
            </>
          </CheckoutForm>
          <CheckoutForm name="PAYMENT DETAILS">
            <>
              <Input
                onClick={selectFirstRadio}
                radioLabel="Payment Method"
                type="radio"
                size="short"
                label="e-Money"
                radioSelected={firstRadioSelected}
              />
              <Input
                onClick={selectSecondRadio}
                type="radio"
                size="short"
                label="Cash on Delivery"
                radioSelected={secondRadioSelected}
              />
              {firstRadioSelected ? (
                <>
                  <Input
                    type="number"
                    size="short"
                    label="e-Money Number"
                    placeholder="238521993"
                  />
                  <Input
                    type="number"
                    size="short"
                    label="e-Money PIN"
                    placeholder="6891"
                  />
                </>
              ) : (
                <div className="delivery-text">
                  <img src={deliveryIcon} alt="Delivery" />
                  <p>
                    The 'Cash on Delivery' option enables you to pay in cash
                    when our delivery courier arrives at your residence. Just
                    make sure your address is correct so that your order will
                    not be cancelled.
                  </p>
                </div>
              )}
            </>
          </CheckoutForm>
        </div>
      </div>
      <div className="checkout-content__right">
        <h5>SUMMARY</h5>
      </div>
    </section>
  );
};

export default CheckoutContent;
