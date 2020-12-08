import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import NotificationBadge from '/components/NotificationBadge';
import {datetimeToHumanizeDate} from '/utils/dateUtils';
import ConversationAvatar from '/components/ConversationAvatar';

class ChatsConversationListItem extends React.Component {
  _displayConversationName(item) {
    if (item.isGroup) {
      return item.groupName;
    } else {
      return item.person.displayName;
    }
  }

  _displayLastMessage(item) {
    if (item.isGroup) {
      return (
        <Text numberOfLines={2} style={styles.messageText}>
          <Text style={{fontFamily: 'SFProText-Bold'}}>
            {item.lastMessage.from}:{' '}
          </Text>
          {item.lastMessage.message}
        </Text>
      );
    } else {
      return (
        <Text numberOfLines={2} style={styles.messageText}>
          {item.lastMessage.message}
        </Text>
      );
    }
  }

  render() {
    const {item} = this.props.conversationItem;
    return (
      <View style={styles.mainContainer}>
        <ConversationAvatar
          isGroup={item.isGroup}
          isConnected={item.isGroup ? false : item.person.isConnected}
          firstAvatar={
            item.isGroup
              ? item.persons[0].profilPicture
              : item.person.profilPicture
          }
          secondAvatar={item.isGroup ? item.persons[1].profilPicture : null}
        />
        <View style={styles.textContainer}>
          <View style={styles.topMessageContainer}>
            <View style={styles.nameContainer}>
              <Text style={styles.nameText}>
                {this._displayConversationName(item)}
              </Text>
            </View>
            <View style={styles.dateContainer}>
              <Text style={styles.dateText}>
                {datetimeToHumanizeDate(item.lastMessage.datetime)}
              </Text>
            </View>
          </View>
          <View style={styles.bottomMessageContainer}>
            <View style={styles.messageContainer}>
              {this._displayLastMessage(item)}
            </View>
            <NotificationBadge nbrMessageNotSeen={item.messageNotSeen} />
          </View>
        </View>
      </View>
    );
  }
}

export default ChatsConversationListItem;
