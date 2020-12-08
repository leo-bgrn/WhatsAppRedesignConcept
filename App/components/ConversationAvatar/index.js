import React from 'react';
import {View, Image} from 'react-native';
import {styles} from './styles';

const ConversationAvatar = ({isGroup, isConnected, firstAvatar, secondAvatar, size}) => {
  if (!isGroup) {
    return (
      <View style={styles.avatarContainer}>
        <Image source={{uri: firstAvatar}} style={styles.singleAvatar} />
        {isConnected && (
          <View style={styles.connectedBadgeContainer}>
            <View style={styles.connectedBadgeInside}></View>
          </View>
        )}
      </View>
    );
  } else {
    return (
      <View style={styles.avatarContainer}>
        <Image source={{uri: secondAvatar}} style={styles.secondGroupAvatar} />
        <Image source={{uri: firstAvatar}} style={styles.firstGroupAvatar} />
      </View>
    );
  }
};

export default ConversationAvatar;
