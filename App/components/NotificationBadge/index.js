import React from 'react';
import {View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';
import {COLORS} from '/assets/styles/styles.js';

const NotificationBadge = ({nbrMessageNotSeen}) => {
  if (nbrMessageNotSeen === 0) {
    return <View></View>;
  }
  return (
    <LinearGradient
      style={styles.container}
      colors={[COLORS.common.gradientStart, COLORS.common.gradientEnd]}
      start={{x: 0, y: 1}}
      end={{x: 1, y: 0}}>
      <Text style={styles.text}>{nbrMessageNotSeen}</Text>
    </LinearGradient>
  );
};

export default NotificationBadge;
