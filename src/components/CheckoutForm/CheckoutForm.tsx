import './CheckoutForm.scss';

interface CheckoutFormProps {
  name: string;
  children: JSX.Element;
}

const CheckoutForm = ({ name, children }: CheckoutFormProps) => {
  return (
    <form className="checkout-form">
      <h6 className="checkout-form__name">{name}</h6>
      <div className="checkout-form__content">{children}</div>
    </form>
  );
};

export default CheckoutForm;
