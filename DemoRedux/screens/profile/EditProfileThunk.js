import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {KEY_STORAGE} from '../../common/Constant';
import {getDataLocalStorageByKey} from '../../common/LocalStorage';

export const updateProfile = createAsyncThunk(
  'profile/updateProfile',
  async params => {
    const token = await getDataLocalStorageByKey(KEY_STORAGE.token);
    console.log(token);
    const resp = await axios.post(
      'https://shop.cyberlearn.vn/api/Users/updateProfile',
      params,
      {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          Authorization: `Bearer ${token}`,
        },
      },
    );
    const data = resp.data;

    return data;
  },
);
