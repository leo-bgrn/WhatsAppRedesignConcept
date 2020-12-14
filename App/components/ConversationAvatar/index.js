import React from 'react';
import {View, Image} from 'react-native';
import {styles} from './styles';
import {useTheme} from 'react-navigation';
import {COLORS} from '/assets/styles/styles';

const ConversationAvatar = ({
  isGroup,
  isConnected,
  firstAvatar,
  secondAvatar,
  size,
}) => {
  let theme = useTheme();
  if (!isGroup) {
    return (
      <View style={styles.avatarContainer}>
        <Image source={{uri: firstAvatar}} style={styles.singleAvatar} />
        {isConnected && (
          <View
            style={[
              styles.connectedBadgeContainer,
              {backgroundColor: COLORS[theme].grey5},
            ]}>
            <View style={styles.connectedBadgeInside}></View>
          </View>
        )}
      </View>
    );
  } else {
    return (
      <View style={styles.avatarContainer}>
        <Image
          source={{uri: secondAvatar}}
          style={[styles.secondGroupAvatar, {borderColor: COLORS[theme].grey5}]}
        />
        <Image
          source={{uri: firstAvatar}}
          style={[styles.firstGroupAvatar, {borderColor: COLORS[theme].grey5}]}
        />
      </View>
    );
  }
};

export default ConversationAvatar;
