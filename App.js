/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView, Text,
} from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import Navigator from './src/navigation/Navigator';

const App = () => {

  return (
    <TailwindProvider>
      <Navigator />
    </TailwindProvider>
  );
};

export default App;
