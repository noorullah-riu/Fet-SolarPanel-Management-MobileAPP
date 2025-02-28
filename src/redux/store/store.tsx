import {configureStore, combineReducers} from '@reduxjs/toolkit';
import { customerSlice } from '../reducers/CustomerSlice';
import { salesBlanketSlice } from '../reducers/SalesBlanketSlice';
import OrderSlice from '../reducers/OrderSlice';
import PendingOrderSlice from '../reducers/PendingOrderSlice';

import PRODUCTSReducer from '../reducers/ProductSlice';


//import AsyncStorage from '@react-native-async-storage/async-storage';
//import persistReducer from 'redux-persist/es/persistReducer';

// let persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
// };

let rootReducer = combineReducers({
  customerD:customerSlice.reducer,
  salesBlanketD:salesBlanketSlice.reducer,
  ordersD: OrderSlice,
  pendingOrderD:PendingOrderSlice,
  //message: CUSTOMERReducer,
  products: PRODUCTSReducer,

});

//let persistedReducer = persistReducer(persistConfig, rootReducer);
//let persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: rootReducer, //,persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
