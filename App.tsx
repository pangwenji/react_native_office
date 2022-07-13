/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { type PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import store from './src/store/index';
import {
  StatusBar,
  StyleSheet,
} from 'react-native';


import Navigator from './src/routes/index'
import { ThemeProvider } from 'react-native-elements'

const App = () => {

  return (
    <Provider store={store}>
      <ThemeProvider >
            <Navigator />
            <StatusBar />
        </ThemeProvider>
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
