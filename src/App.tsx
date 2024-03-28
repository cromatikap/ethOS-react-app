/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';

import {hasSystemWallet} from 'expo-walletsdk';

import Main from './components/Main';
import Incompatible from './components/Incompatible';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        { hasSystemWallet() ? <Main /> : <Incompatible /> }
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
