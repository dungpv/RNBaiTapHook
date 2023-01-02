import {createSlice} from '@reduxjs/toolkit';
import {updateProfile} from './EditProfileThunk';

const initialState = {
  isLoading: false,
  isUpdateSuccess: false,
};

const editProfileSlice = createSlice({
  name: 'editProfileReducer',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(updateProfile.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action.payload);
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.isLoading = false;
        console.log(action.payload);
      });
  },
});

export default editProfileSlice.reducer;
