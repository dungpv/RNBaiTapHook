import {View, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {giamCount, tangCount} from './Action';

export default function DemoFuncRedux() {
  let count = useSelector(state => state.count);
  let dispatch = useDispatch();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 20, fontWeight: '600'}}>{count}</Text>
      <TouchableOpacity
        onPress={() => {
          dispatch(tangCount());
        }}>
        <Text style={{fontSize: 20, fontWeight: '600'}}>Tăng Biến Count</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          dispatch(giamCount());
        }}>
        <Text style={{fontSize: 20, fontWeight: '600'}}>Giảm Biến Count</Text>
      </TouchableOpacity>
    </View>
  );
}
