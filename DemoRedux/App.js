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
import DemoLocalStorage from './screens/demolocalstorage/DemoLocalStorage';
import Login from './screens/login/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from './screens/homepage/HomePage';
import {KEY_SCREENS} from './common/Constant';
import EditProfilePage from './screens/profile/EditProfilePage';

const Stack = createStackNavigator();

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

  // return (
  //   <Provider store={store}>
  //     <View>
  //       <Main></Main>
  //     </View>
  //   </Provider>
  // );

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {/* <Stack.Screen
            name={KEY_SCREENS.login}
            component={Login}></Stack.Screen> */}
          {/* <Stack.Screen
            name={KEY_SCREENS.homepage}
            component={HomePage}></Stack.Screen> */}
          <Stack.Screen
            name={KEY_SCREENS.profile}
            component={EditProfilePage}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
