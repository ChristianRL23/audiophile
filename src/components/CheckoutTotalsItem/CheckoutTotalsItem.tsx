import './CheckoutTotalsItem.scss';

interface CheckoutTotalsItemProps {
  description: string;
  value: number;
  style?: object;
  valueStyle?: object;
}

const CheckoutTotalsItem = ({
  description,
  value,
  style,
  valueStyle,
}: CheckoutTotalsItemProps) => {
  return (
    <div style={style} className="checkout-totals-item">
      <h6 className="checkout-totals-item__description">{description}</h6>
      <h5 style={valueStyle} className="checkout-totals-item__value">
        ${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      </h5>
    </div>
  );
};

export default CheckoutTotalsItem;
