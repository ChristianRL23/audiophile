import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
  name: 'orderModal',
  initialState: { displayed: false },
  reducers: {
    open(state) {
      state.displayed = true;
    },
    close(state) {
      state.displayed = false;
    },
  },
});

export const orderModalActions = orderSlice.actions;

export default orderSlice.reducer;
