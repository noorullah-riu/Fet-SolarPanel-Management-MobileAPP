import React from 'react';
import {RootNavigator} from './navigation/RootNavigator';
import {EcomProvider} from './contextApi/DataProvider';
import ApiProvider from './networking/ApiProvider';
import Toast from 'react-native-toast-message';
import {Provider} from 'react-redux';
import {store} from './redux/store/store';
//import {PersistGate} from 'redux-persist/integration/react';
//import persistStore from 'redux-persist/es/persistStore';

//let persistore = persistStore(store);

// node 20.11.0
const App = () => {
  return (
    <Provider store={store}>
      {/* <PersistGate persistor={persistore}> */}
        <ApiProvider>
          <EcomProvider>
            <RootNavigator />
            <Toast />
          </EcomProvider>
        </ApiProvider>
      {/* </PersistGate> */}
    </Provider>
  );
};

export default App;
