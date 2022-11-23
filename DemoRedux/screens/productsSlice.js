import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async params => {
    console.log(params);
    const response = await fetch('http://svcy3.myclass.vn/api/Product');
    return await response.json().content;
  },
);

// const productsSlice = createSlice({
//   name: 'products',
//   initialState: {
//     products: [],
//   },
//   reducers: {},
//   extraReducers: builder => {
//     builder.addCase(fetchProducts.pending, state => {});
//     builder.addCase(fetchProducts.fulfilled, (state, action) => {
//       state.users = action.payload;
//     });
//     builder.addCase(fetchProducts.rejected, state => {});
//   },
// });

// export default productsSlice.reducer;
