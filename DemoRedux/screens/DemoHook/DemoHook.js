import {View, Text, TouchableOpacity} from 'react-native';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import ChildDemoHook from './ChildDemoHook';

export default function DemoHook() {
  const [count, setCount] = useState(0);
  let thongbao = '';

  if (count % 2 == 0) {
    thongbao == 'Count đã là số 2';
  }

  console.log(thongbao);
  console.log(count);

  useEffect(() => {
    console.log('use Effect');
  }, [count]);

  const tinhTong = () => {
    console.log('Tinh tong');
  };

  const callBackTinhTong = useCallback(tinhTong, []);

  const tinhTong1 = () => {
    let i = 0;
    while (i < 100) {
      i++;
    }
    console.log('tinhTong1');
    return i;
  };

  const memoTinhTong1 = useMemo(tinhTong1, []);

  console.log('Render DemoHook');

  return (
    <View>
      <Text>{memoTinhTong1}</Text>
      <Text>DemoHook</Text>
      <TouchableOpacity
        style={{
          padding: 10,
          backgroundColor: 'blue',
          borderRadius: 5,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          setCount(count + 1);
        }}>
        <Text style={{color: 'white'}}>Count +</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          padding: 10,
          backgroundColor: 'green',
          borderRadius: 5,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          setCount(preState => preState - 1);
        }}>
        <Text style={{color: 'white'}}>Count -</Text>
      </TouchableOpacity>
      <ChildDemoHook
        name={thongbao}
        tinhTong={callBackTinhTong}></ChildDemoHook>
    </View>
  );
}
