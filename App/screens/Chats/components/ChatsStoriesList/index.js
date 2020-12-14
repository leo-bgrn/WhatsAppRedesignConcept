import React from 'react';
import {styles} from './styles';
import {FlatList, View} from 'react-native';
import ChatsStoriesListItem from './ChatsStoriesListItem';

export default ChatStoriesList = ({onShowStoriesModal, stories}) => {
  return (
    <View style={styles.mainContainer}>
      <FlatList
        horizontal
        data={[{}].concat(stories)}
        keyExtractor={(story) => stories.indexOf(story).toString()}
        renderItem={(story) => (
          <ChatsStoriesListItem
            story={story}
            onShowStoriesModal={onShowStoriesModal}
          />
        )}
      />
    </View>
  );
};
