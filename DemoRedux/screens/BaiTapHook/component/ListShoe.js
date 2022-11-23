import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  Image,
  ActivityIndicator,
  SafeAreaView,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {memo, useEffect, useState} from 'react';
import StaggeredList, {
  AnimationType,
} from '@mindinventory/react-native-stagger-view';
import {useDispatch, useSelector} from 'react-redux';

function ListShoe(props) {
  const [dataShoe, setDataShoe] = useState([]);
  const SCREEN_WIDTH = Dimensions.get('window').width;
  let query = props.filterText; //useSelector(state => state.searchText);
  console.log(
    query === '' || query == null ? 'Filter chua param' : 'Filter co param',
  );

  const fetchData = keyword => {
    let params = keyword === '' || keyword == null ? '' : `?keyword=${keyword}`;
    let url = 'http://svcy3.myclass.vn/api/Product' + params;
    //console.log(url);
    fetch(url)
      .then(res => res.json())
      .then(resJson => {
        setDataShoe(resJson.content);
        //console.log(resJson.content);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    fetchData(query);
  }, [query]);

  const getChildrenStyle = () => {
    return {
      width: (SCREEN_WIDTH - 18) / 2,
      height: Number(Math.random() * 20 + 12) * 13,
      backgroundColor: 'gray',
      margin: 4,
      borderRadius: 18,
    };
  };

  const renderChildren = item => {
    //console.log(item);
    return (
      <View style={getChildrenStyle()} key={item.id}>
        <View style={styles.textImageWrap}>
          <Text style={styles.textImageName}>{item.item.name}</Text>
          <Text style={styles.textImagePrice}>{item.item.price}</Text>
        </View>
        <View style={styles.avatarImage}>
          <Image
            style={styles.img}
            source={{
              uri: item.item.image,
            }}
            resizeMode={'cover'}
          />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainWrapperView}>
        <FlatList
          data={dataShoe}
          renderItem={renderChildren}
          keyExtractor={item => item.id}
          style={styles.contentContainer}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
    // <SafeAreaView style={styles.container}>
    //   <View style={styles.mainWrapperView}>
    //     {dataShoe?.length > 0 ? (
    //       // <StaggeredList
    //       //   data={dataShoe}
    //       //   animationType={'NONE'}
    //       //   contentContainerStyle={styles.contentContainer}
    //       //   showsVerticalScrollIndicator={false}
    //       //   renderItem={({item}) => {
    //       //     console.log(item);
    //       //     renderChildren(item);
    //       //   }}
    //       //   LoadingView={
    //       //     <View style={styles.activityIndicatorWrapper}>
    //       //       <ActivityIndicator color={'black'} size={'large'} />
    //       //     </View>
    //       //   }
    //       // />
    //       <FlatList
    //         data={shoesArray}
    //         renderItem={renderChildren}
    //         keyExtractor={item => item.id}
    //       />
    //     ) : null}
    //   </View>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'gray',
  },
  mainWrapperView: {
    backgroundColor: 'white',
    paddingTop: 20,
  },
  activityIndicatorWrapper: {
    alignSelf: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 0,
    alignSelf: 'stretch',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  avatarImage: {
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    borderRadius: 15,
  },
  textImageWrap: {
    marginLeft: 8,
    marginTop: 10,
  },
  textImageName: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  textImagePrice: {
    color: 'orange',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default memo(ListShoe);
