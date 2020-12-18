import React from 'react';
import {FlatList, View, Text} from 'react-native';
import ChatsConversationListItem from './ChatsConversationListItem/index';
import {styles} from './styles';
import {COLORS} from '/assets/styles/styles';
import {useTheme} from 'react-navigation';

export default ChatsConversationList = (props) => {
  let theme = useTheme();
  renderSeparator = () => {
    return (
      <View
        style={[
          styles.separator,
          {backgroundColor: COLORS[theme].grey4},
        ]}></View>
    );
  };

  renderLastItem = () => {
    return (
      <View style={styles.lastItemContainer}>
        <Text style={[styles.lastItemText, {color: COLORS[theme].grey3}]}>
          You doesn't have any other conversations
        </Text>
      </View>
    );
  };

  displayConversation = (conversationId) => {
    props.navigation.navigate('Conversation', {
      conversationId: conversationId,
    });
  };

  const data = [...props.conversations, 'LAST_ITEM'];

  return (
    <FlatList
      style={styles.list}
      data={data}
      keyExtractor={(conversation) =>
        conversation !== 'LAST_ITEM' ? conversation.id : 'LAST'
      }
      renderItem={(conversation) => {
        if (conversation.item === 'LAST_ITEM') {
          return this.renderLastItem();
        }
        return (
          <ChatsConversationListItem
            conversationItem={conversation.item}
            displayConversation={this.displayConversation}
          />
        );
      }}
      ItemSeparatorComponent={this.renderSeparator}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    />
  );
};
