import React from 'react';
import {styles} from './styles';
import {View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import StorieAvatar from '/components/StorieAvatar/index';
import {COLORS} from '/assets/styles/styles.js';
import {useTheme} from 'react-navigation';

export default ChatsStoriesListItem = ({story, onShowStoriesModal}) => {
  let theme = useTheme();

  renderFirstElement = () => {
    return (
      <View style={[styles.mainContainer, {marginLeft: 20}]}>
        <View style={styles.newStatusImageContainer}>
          <LinearGradient
            style={styles.avatarContainer}
            colors={[COLORS.common.gradientStart, COLORS.common.gradientEnd]}
            start={{x: 0, y: 1}}
            end={{x: 1, y: 0}}>
            <Text style={[styles.plusText, {color: COLORS.light.grey5}]}>
              +
            </Text>
          </LinearGradient>
        </View>
        <View style={styles.nameView}>
          <Text style={[styles.nameText, {color: COLORS[theme].grey3}]}>
            New Status
          </Text>
        </View>
      </View>
    );
  };

  const {index, item} = story;
  if (index === 0) {
    return this.renderFirstElement();
  }
  return (
    <TouchableOpacity
      style={styles.mainContainer}
      onPress={() => onShowStoriesModal(index - 1)}>
      <StorieAvatar
        avatar={item.person.profilPicture}
        nbrNotSeen={
          item.stories.map((story) => story.seen).filter((a) => !a).length
        }
      />
      <View style={styles.nameView}>
        <Text style={[styles.nameText, {color: COLORS[theme].grey3}]}>
          {item.person.displayName}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
