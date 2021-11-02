/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import RootNavigation from './Navigations/RootNavigation'

class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'transparent'}}>
        <RootNavigation/>    
      </SafeAreaView>
    );
  }
};

export default App;
