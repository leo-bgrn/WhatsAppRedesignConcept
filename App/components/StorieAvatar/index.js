import React from 'react';
import {styles} from './styles';
import {View, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const StorieAvatar = ({avatar, nbrNotSeen}) => {
  if (nbrNotSeen !== 0) {
    return (
      <LinearGradient
        style={styles.gradientContainer}
        colors={['#5CE27F', '#5CABE2']}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 0}}>
        <View style={styles.secondContainer}>
          <Image source={{uri: avatar}} style={styles.image} />
        </View>
      </LinearGradient>
    );
  }
  return (
    <View style={styles.secondContainer}>
      <Image source={{uri: avatar}} style={styles.image} />
    </View>
  );
};

export default StorieAvatar;
