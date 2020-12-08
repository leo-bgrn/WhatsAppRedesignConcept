import React from 'react';
import {styles} from './styles';
import {FlatList, View} from 'react-native';
import ChatsStoriesListItem from './ChatsStoriesListItem';

class ChatStoriesList extends React.Component {
  render() {
    const stories = this.props.stories;
    return (
      <View style={styles.mainContainer}>
        <FlatList
          horizontal
          data={[{}].concat(stories)}
          keyExtractor={(story) => stories.indexOf(story).toString()}
          renderItem={(story) => (
            <ChatsStoriesListItem
              story={story}
              onShowStoriesModal={this.props.onShowStoriesModal}
            />
          )}
        />
      </View>
    );
  }
}

export default ChatStoriesList;
