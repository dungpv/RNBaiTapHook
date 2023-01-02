import {createSlice} from '@reduxjs/toolkit';
import {getAllCategory, getProductByCategoryId} from './HomePageThunk';

const initialState = {
  categoryData: [],
  shoesData: [],
  isLoading: false,
  categorySelected: '',
};

const homePageSlice = createSlice({
  name: 'homePageSlice',
  initialState: initialState,
  reducers: {
    setCategorySelected: (state, action) => {
      state.categorySelected = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllCategory.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(getAllCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categoryData = action.payload;
      })
      .addCase(getProductByCategoryId.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(getProductByCategoryId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.shoesData = action.payload;
      });
  },
});

export const {setCategorySelected} = homePageSlice.actions;
export default homePageSlice.reducer;
