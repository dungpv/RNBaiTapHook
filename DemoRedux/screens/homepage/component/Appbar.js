import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {ICONS} from '../../../common/Constant';

export default function Appbar() {
  return (
    <View style={styles.appbar}>
      <TouchableOpacity>
        <Image
          style={[styles.icon, {tintColor: 'white'}]}
          source={ICONS.iconClose}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image
          style={[styles.icon, {tintColor: 'white'}]}
          source={ICONS.iconTune}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
}
