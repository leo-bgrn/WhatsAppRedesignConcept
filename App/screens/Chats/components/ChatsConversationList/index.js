import React from 'react';
import {FlatList, View, Text} from 'react-native';
import ChatsConversationListItem from './ChatsConversationListItem/index';
import {styles} from './styles';

class ChatsConversationList extends React.Component {
  renderSeparator() {
    return <View style={styles.separator}></View>;
  }

  renderLastItem() {
    return (
      <View style={styles.lastItemContainer}>
        <Text style={styles.lastItemText}>
          You doesn't have any other conversations
        </Text>
      </View>
    );
  }

  render() {
    const data = [...this.props.conversations, 'LAST_ITEM'];
    return (
      <FlatList
        style={styles.list}
        data={data}
        keyExtractor={(conversation) => data.indexOf(conversation).toString()}
        renderItem={(conversation) => {
          if (conversation.item === 'LAST_ITEM') {
            return this.renderLastItem();
          }
          return <ChatsConversationListItem conversationItem={conversation} />;
        }}
        ItemSeparatorComponent={this.renderSeparator}
      />
    );
  }
}

export default ChatsConversationList;
