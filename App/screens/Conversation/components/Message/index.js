import React from 'react';
import {styles} from './styles';
import {View, Text, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useTheme} from 'react-navigation';
import {COLORS} from '/assets/styles/styles';

const Message = ({message, conversation}) => {
  const theme = useTheme();

  renderOwnMessage = (message) => {
    return (
      <View style={styles.messageMainContainer}>
        <LinearGradient
          style={styles.ownMessageContainer}
          colors={[COLORS.common.gradientStart, COLORS.common.gradientEnd]}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}>
          <View style={styles.textContainer}>
            <Text style={[styles.textMessage, {color: COLORS[theme].grey5}]}>
              {message.message}
            </Text>
          </View>
        </LinearGradient>
      </View>
    );
  };

  renderOtherMessage = (message, person) => {
    return (
      <View style={styles.messageMainContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={styles.avatarContainer}>
            <Image source={{uri: person.profilPicture}} style={styles.avatar} />
            {person.isConnected && (
              <View
                style={[
                  styles.connectedBadgeContainer,
                  {backgroundColor: COLORS[theme].grey5},
                ]}>
                <View style={styles.connectedBadgeInside}></View>
              </View>
            )}
          </View>
          <View
            style={[
              styles.otherMessageContainer,
              {backgroundColor: COLORS[theme].grey4},
            ]}>
            <View style={styles.textContainer}>
              <Text style={[styles.textMessage, {color: COLORS[theme].grey1}]}>
                {message.message}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  if (message.from === -1) {
    return renderOwnMessage(message);
  } else if (!conversation.isGroup) {
    return renderOtherMessage(message, conversation.person);
  }
  return renderOtherMessage(message, conversation.persons[message.from]);
};

export default Message;
