import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles/styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import Appbar from './component/Appbar';
import HeaderProfile from './component/HeaderProfile';
import FormProfile from './component/FormProfile';

export default function EditProfilePage() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Appbar />
        <HeaderProfile />
        <FormProfile />
      </SafeAreaView>
    </View>
  );
}
