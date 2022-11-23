import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  icon: {
    width: 24,
    height: 24,
  },
  icon16: {
    width: 16,
    height: 16,
  },
  icon28: {
    width: 28,
    height: 28,
  },
  appbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  appbar__title: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    height: 50,
  },
  appbar__title__text: {
    fontSize: 24,
    fontWeight: '600',
  },
  search__container: {
    marginLeft: 20,
  },
  search__title: {
    fontSize: 28,
    fontWeight: '700',
  },
  search__container_input: {
    //backgroundColor: '#2196f3',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  search__textinput: {
    height: 40,
    marginTop: 15,
    marginRight: 15,
    marginBottom: 15,
    padding: 10,
    borderRadius: 10,
    variant: 'filled',
    width: '65%',
    backgroundColor: 'white',
  },
  search__button: {
    backgroundColor: '#dfdfdf',
    height: 40,
    width: 100,
    borderRadius: 10,
  },
  search__button__text: {
    textAlign: 'center',
    paddingTop: 8,
    color: 'orange',
    fontSize: 16,
    fontWeight: '600',
  },
});
