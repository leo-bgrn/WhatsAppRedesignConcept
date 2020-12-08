import React from 'react';
import {FlatList, View} from 'react-native';
import ChatsConversationListItem from './ChatsConversationListItem/index';
import {styles} from './styles';

class ChatsConversationList extends React.Component {
  renderSeparator() {
    return <View style={styles.separator}></View>;
  }

  render() {
    return (
      <FlatList
        style={styles.list}
        data={this.props.conversations}
        keyExtractor={(conversation) =>
          this.props.conversations.indexOf(conversation).toString()
        }
        renderItem={(conversation) => (
          <ChatsConversationListItem conversationItem={conversation} />
        )}
        ItemSeparatorComponent={this.renderSeparator}
      />
    );
  }
}

export default ChatsConversationList;
