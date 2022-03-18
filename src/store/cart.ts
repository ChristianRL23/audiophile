import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { displayed: false },
  reducers: {
    openCart(state) {
      state.displayed = true;
    },
    closeCart(state) {
      state.displayed = false;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
