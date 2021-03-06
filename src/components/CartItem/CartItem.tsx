import InputNumber from '../InputNumber/InputNumber';
import './CartItem.scss';

interface CartItemProps {
  image: string;
  name: string;
  price: number;
  quantity: number;
  cart: boolean;
  style?: object;
}

const CartItem = ({
  image,
  name,
  price,
  quantity,
  cart,
  style,
}: CartItemProps) => {
  return (
    <div
      style={style}
      key={Math.random().toString(16).slice(2)}
      className="cart-item"
    >
      <div className="cart-item__left">
        <img src={image} alt="Product cart item" />
        <div>
          <h5>{name}</h5>
          <h6>${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</h6>
        </div>
      </div>
      {cart ? (
        <InputNumber cartItem={name} value={quantity.toString()} />
      ) : (
        <h6 className="cart-item__quantity">x{quantity}</h6>
      )}
    </div>
  );
};

export default CartItem;
