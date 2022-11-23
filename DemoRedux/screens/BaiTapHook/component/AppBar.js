import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import {ICONS} from '../../../Constants/Images';
import styles from '../styles/styles';
export default function AppBar() {
  console.log('app bar');
  return (
    <View style={styles.appbar}>
      <TouchableOpacity>
        <Image style={styles.icon28} source={ICONS.back} resizeMode="contain" />
      </TouchableOpacity>
      <View style={styles.appbar__title}>
        <Text style={styles.appbar__title__text}>SHOE APP</Text>
      </View>
      <TouchableOpacity>
        <Image
          style={styles.icon28}
          source={ICONS.customer}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
}
