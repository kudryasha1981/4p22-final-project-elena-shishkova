import { createSlice } from '@reduxjs/toolkit';

export const basketSlice = createSlice({
  name: 'basket',
  initialState: {},

  reducers: {
    addToBasket(state, { payload }) {
      // if (state[payload]) {
      //     state[payload] += 1;
      // } else {
      //     state[payload] = 1;
      // }
    },
  },
});

export const { addToBasket } = basketSlice.actions;

export default basketSlice.reducer;
