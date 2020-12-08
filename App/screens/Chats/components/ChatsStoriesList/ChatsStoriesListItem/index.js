import React from 'react';
import {styles} from './styles';
import {View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import StorieAvatar from '/components/StorieAvatar/index';

class ChatsStoriesListItem extends React.Component {
  renderFirstElement() {
    return (
      <View style={[styles.mainContainer, {marginLeft: 20}]}>
        <View style={styles.newStatusImageContainer}>
          <LinearGradient
            style={styles.avatarContainer}
            colors={['#5CE27F', '#5CABE2']}
            start={{x: 0, y: 1}}
            end={{x: 1, y: 0}}>
            <Text style={styles.plusText}>+</Text>
          </LinearGradient>
        </View>
        <View style={styles.nameView}>
          <Text style={styles.nameText}>New Status</Text>
        </View>
      </View>
    );
  }

  render() {
    const {index, item} = this.props.story;
    if (index === 0) {
      return this.renderFirstElement();
    }
    return (
      <TouchableOpacity
        style={styles.mainContainer}
        onPress={this.props.onShowStoriesModal}>
        <StorieAvatar
          avatar={item.person.profilPicture}
          nbrNotSeen={
            item.stories.map((story) => story.seen).filter((a) => !a).length
          }
        />
        <View style={styles.nameView}>
          <Text style={styles.nameText}>{item.person.displayName}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default ChatsStoriesListItem;
