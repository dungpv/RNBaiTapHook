import {View, Text, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';

function ChildDemoHook(props) {
  console.log('Child DemoHook');

  return (
    <View>
      <Text>{props.name}</Text>
      <TouchableOpacity
        style={{
          padding: 10,
          backgroundColor: 'red',
          borderRadius: 5,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          props.tinhTong();
        }}>
        <Text style={{color: 'white'}}>Button Child</Text>
      </TouchableOpacity>

      <Text>ChildDemoHook</Text>
    </View>
  );
}

export default memo(ChildDemoHook);
