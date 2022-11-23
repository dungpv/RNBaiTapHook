import {View, Text} from 'react-native';
import React from 'react';
import DemoRedux from './screens/DemoRedux';
import {Provider} from 'react-redux';
import {store} from './store';
import DemoFuncRedux from './screens/DemoFuncRedux';
import DemoReduxToolkit from './screens/DemoReduxToolkit';
import Products from './screens/ProductReduxThunk';
import DemoHook from './screens/DemoHook/DemoHook';
import Main from './screens/BaiTapHook/Main';
import ListShoeMasonry from './screens/BaiTapHook/component/ListShoeMasonry';
import DemoFormik from './screens/DemoFormik/DemoFormik';

export default function App() {
  // return (
  //   <Provider store={store}>
  //     <View style={{flex: 1, justifyContent: 'center'}}>
  //       <DemoFuncRedux></DemoFuncRedux>
  //     </View>
  //   </Provider>
  // );
  // return (
  //   <Provider store={store}>
  //     <View style={{flex: 1, justifyContent: 'center'}}>
  //       <DemoReduxToolkit></DemoReduxToolkit>
  //     </View>
  //   </Provider>
  // );

  // return (
  //   <Provider store={store}>
  //     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
  //       <DemoFormik></DemoFormik>
  //     </View>
  //   </Provider>
  // );

  return (
    <Provider store={store}>
      <View>
        <Main></Main>
      </View>
    </Provider>
  );
}
