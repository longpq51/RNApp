/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import {TailwindProvider} from 'tailwindcss-react-native';
import Navigator from './src/navigation/Navigator';
import {createStore} from '@reduxjs/toolkit';
import rootReducer from './src/store/reducer';
import Toast from 'react-native-toast-message';

const store = createStore(rootReducer);

const App = () => {
  return (
    <TailwindProvider>
      <Provider store={store}>
        <Navigator />
        <Toast />
      </Provider>
    </TailwindProvider>
  );
};

export default App;
