import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import Chats from '/screens/Chats';
import Calls from '/screens/Calls';
import Conversation from '/screens/Conversation';
import IconLinearGradient from '/components/IconLinearGradient';
import {Icon} from 'react-native-elements';
import {View} from 'react-native';
import {AppearanceProvider, useColorScheme} from 'react-native-appearance';
import {COLORS} from '/assets/styles/styles.js';

const AppNavigator = createBottomTabNavigator(
  {
    Calls: {
      screen: Calls,
      navigationOptions: ({theme}) => {
        return {
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
                  color={COLORS[theme].grey2}
                />
              );
            }
          },
          tabBarOptions: {
            showLabel: false,
            showIcon: true,
            style: {
              backgroundColor: COLORS[theme].grey5,
            },
          },
        };
      },
    },
    Chats: {
      screen: Chats,
      navigationOptions: ({theme}) => {
        return {
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
                  color={COLORS[theme].grey3}
                />
              );
            }
          },
          tabBarOptions: {
            showLabel: false,
            showIcon: true,
            style: {
              backgroundColor: COLORS[theme].grey5,
            },
          },
        };
      },
    },
  },
  {
    initialRouteName: 'Chats',
  },
);

const ChatsNavigator = createStackNavigator({
  Chats: {
    screen: AppNavigator,
    navigationOptions: ({theme}) => {
      return {
        headerShown: false,
        cardStyle: {
          backgroundColor: COLORS[theme].grey5,
        },
      };
    },
  },
  Conversation: {
    screen: Conversation,
    navigationOptions: ({theme}) => {
      return {
        headerShown: false,
        cardStyle: {
          backgroundColor: COLORS[theme].grey5,
        },
      };
    },
  },
});

let Navigation = createAppContainer(ChatsNavigator);

export default () => {
  let theme = useColorScheme();

  return (
    <AppearanceProvider>
      <Navigation theme={theme} />
    </AppearanceProvider>
  );
};
