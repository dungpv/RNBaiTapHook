import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {decrement, increment} from './counterSlice';
import {fetchProducts} from './productsSlice';

export default function DemoReduxToolkit() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 20, fontWeight: '600'}}>{count}</Text>
      <TouchableOpacity
        onPress={() => {
          dispatch(increment());
        }}>
        <Text style={{fontSize: 20, fontWeight: '600'}}>Tăng Biến Count</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          dispatch(decrement());
        }}>
        <Text style={{fontSize: 20, fontWeight: '600'}}>Giảm Biến Count</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          dispatch(fetchProducts('tham so'));
        }}>
        <Text style={{fontSize: 20, fontWeight: '600'}}>Get Product</Text>
      </TouchableOpacity>
    </View>
  );
}
