import React from 'react';
import Chats from '/screens/Chats';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

const AppNavigator = createBottomTabNavigator(
  {
    Chats: {
      screen: Chats,
      navigationOptions: {},
    },
  },
  {
    tabBarOptions: {},
  },
);
export default createAppContainer(AppNavigator);
