import {createStore} from 'redux';
import {Reducer} from './screens/BaiTapHook/Redux/Reducer';

// tao ra 1 store quan ly state tap chung cho du an
export const store = createStore(Reducer);
