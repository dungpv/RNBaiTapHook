import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Keyboard,
} from 'react-native';
import React, {memo, useCallback, useEffect, useState} from 'react';
import styles from '../styles/styles';
import {useDispatch} from 'react-redux';
import {searchQuery} from '../Redux/Action';
import ListShoe from './ListShoe';
import {debounce} from 'lodash';

function Search() {
  const [searchTextData, setSearchTextData] = useState('');
  const [filterShoe, setFilterShoe] = useState('');
  let dispatch = useDispatch();

  const handleChangeText = useCallback(
    debounce(e => {
      console.log(e);
      setSearchTextData(e);
    }, 1200),
    [searchTextData],
  );

  console.log('Search');

  return (
    <SafeAreaView>
      <View style={styles.search__container}>
        <Text style={styles.search__title}>Find Your</Text>
        <Text style={styles.search__title}>Dream Shoes</Text>
        <View style={styles.search__container_input}>
          <TextInput
            style={styles.search__textinput}
            placeholder="Search Shoes..."
            onChangeText={e => handleChangeText(e)}></TextInput>
          <TouchableOpacity
            style={styles.search__button}
            onPress={() => {
              Keyboard.dismiss();
              setFilterShoe(searchTextData);
              //console.log(searchTextData);
              //dispatch(searchQuery(filterShoe));
            }}>
            <Text style={styles.search__button__text}>Search</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ListShoe filterText={filterShoe}></ListShoe>
    </SafeAreaView>
  );
}
export default memo(Search);
// memo, callback
