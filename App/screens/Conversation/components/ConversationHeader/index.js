import React from 'react';
import {styles} from './styles';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import IconLinearGradient from '/components/IconLinearGradient';
import {Icon} from 'react-native-elements';
import {datetimeToHumanizeDate} from '/utils/dateUtils';
import {useTheme} from 'react-navigation';
import {COLORS} from '/assets/styles/styles';

const ConversationHeader = ({conversation, navigationGoBack}) => {
  const theme = useTheme();

  renderImageAvatar = (conversation) => {
    if (conversation.isGroup) {
      return (
        <>
          <Image
            source={{uri: conversation.persons[0].profilPicture}}
            style={[
              styles.secondGroupAvatar,
              {borderColor: COLORS[theme].grey5},
            ]}
          />
          <Image
            source={{uri: conversation.persons[1].profilPicture}}
            style={[
              styles.firstGroupAvatar,
              {borderColor: COLORS[theme].grey5},
            ]}
          />
        </>
      );
    }
    return (
      <Image
        source={{uri: conversation.person.profilPicture}}
        style={styles.avatar}
      />
    );
  };

  renderAvatar = (conversation) => {
    return (
      <View style={styles.avatarContainer}>
        {conversation != null && this.renderImageAvatar(conversation)}
        {conversation != null &&
          !conversation.isGroup &&
          conversation.person.isConnected && (
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
  };

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={navigationGoBack}>
        <IconLinearGradient>
          <Icon name="chevron-back-outline" type="ionicon" size={35} />
        </IconLinearGradient>
      </TouchableOpacity>
      {this.renderAvatar(conversation)}
      <View style={styles.textContainer}>
        <View style={styles.nameContainer}>
          <Text style={[styles.nameText, {color: COLORS[theme].grey1}]}>
            {conversation != null
              ? conversation.isGroup
                ? conversation.groupName
                : conversation.person.displayName
              : ''}
          </Text>
        </View>
        {conversation != null && !conversation.isGroup && (
          <View style={styles.onlineFromContainer}>
            <Text style={[styles.onlineFromText, {color: COLORS[theme].grey3}]}>
              {conversation.person.isConnected
                ? 'Online'
                : datetimeToHumanizeDate(conversation.person.connectedFrom)}
            </Text>
          </View>
        )}
      </View>
      <IconLinearGradient>
        <Icon name="call-outline" type="ionicon" size={35} />
      </IconLinearGradient>
      <IconLinearGradient>
        <Icon name="videocam-outline" type="ionicon" size={40} />
      </IconLinearGradient>
    </View>
  );
};

export default ConversationHeader;
