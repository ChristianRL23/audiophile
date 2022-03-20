import { useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { ProductCartModel } from '../../models';
import { orderModalActions } from '../../store/orderModal';
import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import CheckoutTotalsItem from '../CheckoutTotalsItem/CheckoutTotalsItem';
import Input from '../Input/Input';
import './CheckoutContent.scss';
import deliveryIcon from './Shape.svg';

interface CheckoutTotalsModel {
  total: number;
  vat: number;
  grandTotal: number;
}

const CheckoutContent = () => {
  const dispatch = useDispatch();
  const [checkoutTotals, setCheckoutTotals] = useState<CheckoutTotalsModel>({
    total: 0,
    vat: 0,
    grandTotal: 0,
  });

  const cartProductsStore: ProductCartModel[] = useSelector(
    (state: RootStateOrAny) => state.cart.products
  );
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

  const openOrderModal = () => {
    dispatch(orderModalActions.open());
  };

  useEffect(() => {
    //TOTAL
    const total = Number(
      cartProductsStore
        .map((product) => product.price! * product.quantity)
        .reduce(
          (previousValue, currentValue) => previousValue + currentValue,
          0
        )
    );
    //VAT
    const vat = (20 * total) / 100;
    //GRAND TOTAL
    const grandTotal = total + 50;
    //SET STATE
    setCheckoutTotals({
      total,
      vat,
      grandTotal,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        <h5 className="checkout-content__right__title">SUMMARY</h5>
        <div className="checkout-content__right__cart-items">
          {cartProductsStore.map((product) => (
            <CartItem
              image={product.image}
              name={product.name}
              price={product.price!}
              quantity={product.quantity}
              cart={false}
            />
          ))}
        </div>
        <div className="checkout-content__right__totals">
          <CheckoutTotalsItem
            description="TOTAL"
            value={checkoutTotals.total}
          />
          <CheckoutTotalsItem description="SHIPPING" value={50} />
          <CheckoutTotalsItem
            description="VAT (INCLUDED)"
            value={Math.round(checkoutTotals.vat)}
          />
          <CheckoutTotalsItem
            style={{
              marginTop: '1.2rem',
              marginBottom: '1.8rem',
              color: '#D87D4A',
            }}
            description="GRAND TOTAL"
            value={Math.round(checkoutTotals.grandTotal)}
          />
        </div>
        <Button
          onClick={openOrderModal}
          style={{ width: '100%' }}
          color="orange"
          textContent="CONTINUE"
        />
      </div>
    </section>
  );
};

export default CheckoutContent;
