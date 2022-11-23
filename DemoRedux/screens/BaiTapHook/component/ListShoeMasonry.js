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
import React, {useState} from 'react';
import StaggeredList from '@mindinventory/react-native-stagger-view';

export default function ListShoeMasonry() {
  const shoesArray = [
    {
      id: 1,
      name: 'Adidas Prophere',
      alias: 'adidas-prophere',
      price: 350.0,
      description:
        'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
      size: '[36,37,38,39,40,41,42]',
      shortDescription:
        'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
      quantity: 995,
      deleted: false,
      categories:
        '[{"id":"ADIDAS","category":"ADIDAS"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
      relatedProducts: '[2,3,5]',
      feature: true,
      image: 'https://svcy3.myclass.vn/images/adidas-prophere.png',
    },
    {
      id: 2,
      name: 'Adidas Prophere Black White',
      alias: 'adidas-prophere-black-white',
      price: 450.0,
      description:
        'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
      size: '[36,37,38,39,40,41,42]',
      shortDescription:
        'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
      quantity: 990,
      deleted: false,
      categories:
        '[{"id":"ADIDAS","category":"ADIDAS"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
      relatedProducts: '[1,4,6]',
      feature: false,
      image: 'http://svcy3.myclass.vn/images/adidas-prophere-black-white.png',
    },
    {
      id: 3,
      name: 'Adidas Prophere Customize',
      alias: 'adidas-prophere-customize',
      price: 375.0,
      description:
        'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
      size: '[36,37,38,39,40,41,42]',
      shortDescription:
        'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
      quantity: 415,
      deleted: false,
      categories:
        '[{"id":"ADIDAS","category":"ADIDAS"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
      relatedProducts: '[4,5,7]',
      feature: true,
      image: 'http://svcy3.myclass.vn/images/adidas-prophere-customize.png',
    },
    {
      id: 4,
      name: 'Adidas Super Star Red',
      alias: 'adidas-super-star-red',
      price: 465.0,
      description:
        'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
      size: '[36,37,38,39,40,41,42]',
      shortDescription:
        'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
      quantity: 542,
      deleted: false,
      categories:
        '[{"id":"ADIDAS","category":"ADIDAS"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
      relatedProducts: '[7,8,6]',
      feature: false,
      image: 'http://svcy3.myclass.vn/images/adidas-super-star-red.png',
    },
    {
      id: 5,
      name: 'Adidas Swift Run',
      alias: 'adidas-swift-run',
      price: 550.0,
      description:
        'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
      size: '[36,37,38,39,40,41,42]',
      shortDescription:
        'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
      quantity: 674,
      deleted: false,
      categories:
        '[{"id":"ADIDAS","category":"ADIDAS"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
      relatedProducts: '[2,3,8]',
      feature: true,
      image: 'http://svcy3.myclass.vn/images/adidas-swift-run.png',
    },
    {
      id: 6,
      name: 'Adidas Tenisky Super Star',
      alias: 'adidas-tenisky-super-star',
      price: 250.0,
      description:
        'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
      size: '[36,37,38,39,40,41,42]',
      shortDescription:
        'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
      quantity: 456,
      deleted: false,
      categories:
        '[{"id":"ADIDAS","category":"ADIDAS"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
      relatedProducts: '[4,2,3]',
      feature: false,
      image: 'http://svcy3.myclass.vn/images/adidas-tenisky-super-star.png',
    },
    {
      id: 7,
      name: 'Adidas Ultraboost 4',
      alias: 'adidas-ultraboost-4',
      price: 450.0,
      description:
        'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
      size: '[36,37,38,39,40,41,42]',
      shortDescription:
        'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
      quantity: 854,
      deleted: false,
      categories:
        '[{"id":"ADIDAS","category":"ADIDAS"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
      relatedProducts: '[8,2,1]',
      feature: true,
      image: 'http://svcy3.myclass.vn/images/adidas-ultraboost-4.png',
    },
    {
      id: 8,
      name: 'Adidas Yeezy 350',
      alias: 'adidas-yeezy-350',
      price: 750.0,
      description:
        'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
      size: '[36,37,38,39,40,41,42]',
      shortDescription:
        'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
      quantity: 524,
      deleted: false,
      categories:
        '[{"id":"ADIDAS","category":"ADIDAS"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
      relatedProducts: '[1,4,6]',
      feature: false,
      image: 'http://svcy3.myclass.vn/images/adidas-yeezy-350.png',
    },
  ];

  const [dataShoe, setDataShoe] = useState([]);
  const SCREEN_WIDTH = Dimensions.get('window').width;

  const getChildrenStyle = () => {
    return {
      width: (SCREEN_WIDTH - 18) / 2,
      height: Number(Math.random() * 20 + 12) * 10,
      backgroundColor: 'gray',
      margin: 4,
      borderRadius: 18,
    };
  };

  const renderChildren = item => {
    return (
      <View style={getChildrenStyle()} key={item.img}>
        <View style={styles.avatarImage}>
          <Image
            style={styles.img}
            source={{
              uri: item.image,
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
        <StaggeredList
          data={shoesArray}
          animationType={'NONE'}
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => {
            return renderChildren(item);
          }}
          isLoading={true}
          LoadingView={
            <View style={styles.activityIndicatorWrapper}>
              <ActivityIndicator color={'black'} size={'large'} />
            </View>
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'gray',
  },
  mainWrapperView: {
    flex: 1,
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
  avatarImage: {
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    borderRadius: 18,
  },
  img: {
    width: '100%',
    height: '100%',
  },
});
