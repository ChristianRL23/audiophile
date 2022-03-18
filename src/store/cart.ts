import { createSlice } from '@reduxjs/toolkit';

type ProductsType = {
  name: string;
  price?: number;
  quantity: number;
  image: string;
};

interface ProductPayload {
  type: string;
  payload: ProductsType;
}

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
const cartInitialState = { displayed: false, products: <ProductsType[]>[] };

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
      console.log(payload);
      const productAdded = state.products.find(
        (product) => product.name === payload.payload.name
      );

      if (!productAdded) {
        console.log(productAdded);
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
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
