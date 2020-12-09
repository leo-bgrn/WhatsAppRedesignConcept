import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Chats from '/screens/Chats';
import Calls from '/screens/Calls';
import IconLinearGradient from '/components/IconLinearGradient';
import {Icon} from 'react-native-elements';
import {View} from 'react-native';

const AppNavigator = createBottomTabNavigator(
  {
    Calls: {
      screen: Calls,
      navigationOptions: {
        tabBarIcon: ({focused}) => {
          if (focused) {
            return (
              <IconLinearGradient>
                <Icon name="call-outline" type="ionicon" size={25} />
              </IconLinearGradient>
            );
          } else {
            return (
              <Icon
                name="call-outline"
                type="ionicon"
                size={25}
                color="#B1B1B1"
              />
            );
          }
        },
      },
    },
    Chats: {
      screen: Chats,
      navigationOptions: {
        tabBarIcon: ({focused}) => {
          if (focused) {
            return (
              <IconLinearGradient>
                <Icon name="chatbubbles-outline" type="ionicon" size={25} />
              </IconLinearGradient>
            );
          } else {
            return (
              <Icon
                name="chatbubbles-outline"
                type="ionicon"
                size={25}
                color="#B1B1B1"
              />
            );
          }
        },
      },
    },
  },
  {
    initialRouteName: 'Chats',
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
    },
  },
);
export default createAppContainer(AppNavigator);
