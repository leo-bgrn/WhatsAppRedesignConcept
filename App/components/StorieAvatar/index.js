import React from 'react';
import {styles} from './styles';
import {View, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '/assets/styles/styles.js';
import {useTheme} from 'react-navigation';

const StorieAvatar = ({avatar, nbrNotSeen}) => {
  let theme = useTheme();
  if (nbrNotSeen !== 0) {
    return (
      <LinearGradient
        style={styles.gradientContainer}
        colors={[COLORS.common.gradientStart, COLORS.common.gradientEnd]}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 0}}>
        <View
          style={[
            styles.secondContainer,
            {backgroundColor: COLORS[theme].grey5},
          ]}>
          <Image source={{uri: avatar}} style={styles.image} />
        </View>
      </LinearGradient>
    );
  }
  return (
    <View
      style={[styles.secondContainer, {backgroundColor: COLORS[theme].grey5}]}>
      <Image source={{uri: avatar}} style={styles.image} />
    </View>
  );
};

export default StorieAvatar;
