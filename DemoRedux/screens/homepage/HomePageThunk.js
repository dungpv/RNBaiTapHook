import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllCategory = createAsyncThunk(
  'category/getAllCategory',
  async () => {
    const resp = await axios.get(
      'https://shop.cyberlearn.vn/api/Product/getAllCategory',
    );
    const data = resp.data;

    return data.content;
  },
);

export const getProductByCategoryId = createAsyncThunk(
  'product/getProductByCategoryId',
  async idCategory => {
    console.log(idCategory);
    const resp = await axios.get(
      `https://shop.cyberlearn.vn/api/Product/getProductByCategory?categoryId=${idCategory}`,
    );
    const data = resp.data;

    return data.content;
  },
);
