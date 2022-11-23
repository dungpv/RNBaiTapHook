import {View, Text} from 'react-native';
import React, {memo, useEffect} from 'react';
import AppBar from './component/AppBar';
import Search from './component/Search';
import ListShoe from './component/ListShoe';
import ListShoeMasonry from './component/ListShoeMasonry';

export default function Main() {
  return (
    <View>
      <AppBar></AppBar>
      <Search></Search>
      {/* <ListShoe></ListShoe> */}
    </View>
  );
}
