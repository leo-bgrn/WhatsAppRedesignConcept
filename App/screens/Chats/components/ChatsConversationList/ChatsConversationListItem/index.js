import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import NotificationBadge from '/components/NotificationBadge';
import {datetimeToHumanizeDate} from '/utils/dateUtils';
import ConversationAvatar from '/components/ConversationAvatar';
import {BOLD_FONT, COLORS} from '/assets/styles/styles.js';
import {useTheme} from 'react-navigation';

export default ChatsConversationListItem = ({
  conversationItem,
  displayConversation,
}) => {
  let theme = useTheme();

  _displayConversationName = (item) => {
    if (item.isGroup) {
      return item.groupName;
    } else {
      return item.person.displayName;
    }
  };

  _displayLastMessage = (item) => {
    if (item.isGroup) {
      return (
        <Text
          numberOfLines={2}
          style={[styles.messageText, {color: COLORS[theme].grey3}]}>
          <Text style={{fontFamily: BOLD_FONT}}>{item.lastMessage.from}: </Text>
          {item.lastMessage.message}
        </Text>
      );
    } else {
      return (
        <Text
          numberOfLines={2}
          style={[styles.messageText, {color: COLORS[theme].grey3}]}>
          {item.lastMessage.message}
        </Text>
      );
    }
  };

  return (
    <TouchableOpacity
      style={styles.mainContainer}
      onPress={() => displayConversation(conversationItem.id)}>
      <ConversationAvatar
        isGroup={conversationItem.isGroup}
        isConnected={
          conversationItem.isGroup ? false : conversationItem.person.isConnected
        }
        firstAvatar={
          conversationItem.isGroup
            ? conversationItem.persons[0].profilPicture
            : conversationItem.person.profilPicture
        }
        secondAvatar={
          conversationItem.isGroup
            ? conversationItem.persons[1].profilPicture
            : null
        }
      />
      <View style={styles.textContainer}>
        <View style={styles.topMessageContainer}>
          <View style={styles.nameContainer}>
            <Text style={[styles.nameText, {color: COLORS[theme].grey1}]}>
              {_displayConversationName(conversationItem)}
            </Text>
          </View>
          <View style={styles.dateContainer}>
            <Text style={[styles.dateText, {color: COLORS[theme].grey3}]}>
              {datetimeToHumanizeDate(conversationItem.lastMessage.datetime)}
            </Text>
          </View>
        </View>
        <View style={styles.bottomMessageContainer}>
          <View style={styles.messageContainer}>
            {_displayLastMessage(conversationItem)}
          </View>
          <NotificationBadge
            nbrMessageNotSeen={conversationItem.messageNotSeen}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};
