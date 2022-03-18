import { createSlice } from '@reduxjs/toolkit';
import { ProductCartModel } from '../models';

interface ProductPayload {
  type: string;
  payload: ProductCartModel;
}

const cartInitialState = {
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  displayed: <boolean>false,
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  products: <ProductCartModel[]>[],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: cartInitialState,
  reducers: {
    openCart(state) {
      state.displayed = true;
    },
    closeCart(state) {
      state.displayed = false;
    },
    addProduct(state, payload: ProductPayload) {
      const productAdded = state.products.find(
        (product) => product.name === payload.payload.name
      );

      if (!productAdded) {
        state.products.push(payload.payload);
      } else {
        const productAddedIndex = state.products.findIndex(
          (product) => product.name === payload.payload.name
        );
        if (
          state.products[productAddedIndex].quantity +
            payload.payload.quantity >
          10
        ) {
          alert('ERROR');
          //TODO: SHOW ERROR AND RESTORE THE INPUT WHEN IS SUBMITTED
        } else {
          state.products[productAddedIndex].quantity +=
            payload.payload.quantity;
        }
      }
    },
    addQuantity(state, payload) {
      const productIndex = state.products.findIndex(
        (product) => product.name === payload.payload
      );
      ++state.products[productIndex].quantity;
    },
    removeQuantity(state, payload) {
      const productIndex = state.products.findIndex(
        (product) => product.name === payload.payload
      );
      --state.products[productIndex].quantity;
    },
    removeAllProducts(state) {
      state.products = [];
    },
    deleteProduct(state, payload) {
      state.products = state.products.filter(
        (product) => product.name !== payload.payload
      );
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
