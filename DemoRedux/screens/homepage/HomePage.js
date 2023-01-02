import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import React, {memo, useEffect} from 'react';
import Appbar from './component/Appbar';
import styles from './styles/Styles';
import {useDispatch, useSelector} from 'react-redux';
import {getAllCategory, getProductByCategoryId} from './HomePageThunk';
import {FlatList} from 'react-native-gesture-handler';
import {setCategorySelected} from './HomePageSlice';
import StaggeredList from '@mindinventory/react-native-stagger-view';
import {ICONS} from '../../common/Constant';

function HomePage() {
  const categoryData = useSelector(state => state.homePageReducer.categoryData);
  const categorySelected = useSelector(
    state => state.homePageReducer.categorySelected,
  );
  const shoesData = useSelector(state => state.homePageReducer.shoesData);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  const _actionClickCategory = idCategory => {
    dispatch(setCategorySelected(idCategory));
    dispatch(getProductByCategoryId(idCategory));
  };

  const renderItemProduct = ({item}) => (
    <View
      styles={{
        margin: 8,
        padding: 16,
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
      }}>
      <Image
        source={ICONS.iconHeart}
        style={[styles.icon16, {alignSelf: 'flex-end'}]}></Image>
      <Image
        resizeMode="contain"
        source={{uri: item.image}}
        style={{width: '100%', height: 100}}></Image>
      <Text style={{fontSize: 18, fontWeight: '700', marginTop: 16}}>
        {item.name}
      </Text>
      <Text style={{fontSize: 18, marginTop: 16}}>{item.price}</Text>
    </View>
  );

  const renderItemCategory = ({item}) => (
    <TouchableOpacity
      style={{marginLeft: 16}}
      onPress={() => {
        _actionClickCategory(item.id);
      }}>
      <Text style={{color: 'white', fontWeight: '600', fontSize: 16}}>
        {item.category}
      </Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <View
        style={{
          height: 250,
          width: '100%',
          backgroundColor: 'black',
          position: 'absolute',
        }}></View>
      <SafeAreaView style={{flex: 1}}>
        <Appbar></Appbar>
        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={categoryData}
            renderItem={renderItemCategory}></FlatList>
        </View>

        <StaggeredList data={shoesData} renderItem={renderItemProduct} />
      </SafeAreaView>
    </View>
  );
}

export default memo(HomePage);
