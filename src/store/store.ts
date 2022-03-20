import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart';
import orderModalReducer from './orderModal';

const store = configureStore({
  reducer: { cart: cartReducer, orderModal: orderModalReducer },
});

export default store;
