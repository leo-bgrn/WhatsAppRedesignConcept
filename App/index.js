/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Dimensions} from 'react-native';
import Chats from './screens/Chats/index';
import EStyleSheet from 'react-native-extended-stylesheet';
import Navigation from '/navigation/MainNavigation'

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

const App = () => {
  return <Navigation />;
};
export default App;
