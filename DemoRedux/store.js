import {configureStore} from '@reduxjs/toolkit';
import {createStore} from 'redux';
import {Reducer} from './screens/BaiTapHook/Redux/Reducer';
import homePageReducer from './screens/homepage/HomePageSlice';
import loginReducer from './screens/login/LoginSlice';
import editProfileReducer from './screens/profile/EditProfileSlice';

// tao ra 1 store quan ly state tap chung cho du an
// bai tap hook
//export const store = createStore(Reducer);

export const store = configureStore({
  reducer: {
    loginReducer,
    homePageReducer,
    editProfileReducer,
  },
});
