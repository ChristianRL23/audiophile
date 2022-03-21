import { useState } from 'react';
import { ProductCartModel } from '../../models';
import CartItem from '../CartItem/CartItem';
import './OrderResume.scss';

interface OrderResumeProps {
  arrCartProducts: ProductCartModel[];
}

const OrderResume = ({ arrCartProducts }: OrderResumeProps) => {
  const [lessProductsDisplayed, setLessProductsDisplayed] =
    useState<boolean>(true);

  const flipAction = () => setLessProductsDisplayed((lastState) => !lastState);

  return (
    <div className="order-resume">
      <div className="order-resume__products">
        {lessProductsDisplayed ? (
          <CartItem
            cart={false}
            image={arrCartProducts[0].image}
            name={arrCartProducts[0].name}
            price={arrCartProducts[0].price!}
            quantity={arrCartProducts[0].quantity}
            style={{ backgroundColor: '#F1F1F1' }}
          />
        ) : (
          arrCartProducts.map((product) => (
            <CartItem
              cart={false}
              image={product.image}
              name={product.name}
              price={product.price!}
              quantity={product.quantity}
              style={{ backgroundColor: '#F1F1F1' }}
            />
          ))
        )}
        {arrCartProducts.length > 1 && (
          <div className="order-resume__action">
            <h6 onClick={flipAction}>
              {lessProductsDisplayed
                ? `and ${arrCartProducts.length - 1} other item(s)`
                : 'View less'}
            </h6>
          </div>
        )}
      </div>
      <div className="order-resume__total">
        <h6>GRAND TOTAL</h6>
        <h5>$5,446</h5>
      </div>
    </div>
  );
};

export default OrderResume;
