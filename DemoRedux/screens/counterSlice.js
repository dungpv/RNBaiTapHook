import {createSlice} from '@reduxjs/toolkit';
import {fetchProducts} from './productsSlice';

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchProducts.pending, (state, action) => {});
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      console.log('thunk');
      console.log(action);
      console.log(state);
    });
  },
});

export const {increment, decrement, incrementByAmount} = counterSlice.actions;

export default counterSlice.reducer;
