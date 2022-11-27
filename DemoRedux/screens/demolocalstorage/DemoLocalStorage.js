import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function DemoLocalStorage() {
  const expiredTime = 8 * 60 * 60 * 1000;
  const storage = new Storage({
    // maximum capacity, default 1000 key-ids
    size: 10,

    // Use AsyncStorage for RN apps, or window.localStorage for web apps.
    // If storageBackend is not set, data will be lost after reload.
    storageBackend: AsyncStorage, // for web: window.localStorage

    // expire time, default: 1 day (1000 * 3600 * 24 milliseconds).
    // can be null, which means never expire.
    defaultExpires: expiredTime,

    // cache data in the memory. default is true.
    enableCache: false,
  });

  const saveStorage = () => {
    storage.save({
      key: 'keyA',
      data: 'Day la data',
    });
  };

  const getStorage = () => {
    storage
      .load({
        key: 'keyA',
        autoSync: true,
        syncInBackground: true,
      })
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.warn(err.message);
      });
  };

  const removeStorge = () => {
    storage.remove({
      key: 'keyA',
    });
  };

  const saveLocalStorage = () => {
    saveStorage();
  };

  return (
    <View>
      <TouchableOpacity onPress={saveLocalStorage}>
        <Text>DemoLocalStorage</Text>
      </TouchableOpacity>
    </View>
  );
}
