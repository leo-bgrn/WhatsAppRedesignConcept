import React from 'react';
import {styles} from './styles';
import {View, Text, Image} from 'react-native';
import {datetimeToHumanizeDate} from '/utils/dateUtils';
import {Icon} from 'react-native-elements';

class CallsListItem extends React.Component {
  renderAvatar(item) {
    return (
      <View style={styles.avatarContainer}>
        <Image
          source={{uri: item.person.profilPicture}}
          style={styles.avatar}
        />
        {item.person.isConnected && (
          <View style={styles.connectedBadgeContainer}>
            <View style={styles.connectedBadgeInside}></View>
          </View>
        )}
      </View>
    );
  }

  render() {
    const {item} = this.props.call;
    return (
      <View style={styles.mainContainer}>
        {this.renderAvatar(item)}
        <View style={styles.textContainer}>
          <View style={styles.nameContainer}>
            <Text
              style={
                item.missed
                  ? [styles.nameText, styles.missedText]
                  : styles.nameText
              }>
              {item.person.displayName}
            </Text>
          </View>
          <View style={styles.typeContainer}>
            <Icon
              name={item.type === 'CALL' ? 'call' : 'videocam'}
              type="ionicon"
              size={15}
              color={item.missed ? '#E25C5C' : '#B1B1B1'}
            />
            <Text
              style={
                item.missed
                  ? [styles.typeText, styles.missedText]
                  : styles.typeText
              }>
              {'  '}
              {item.type === 'CALL'
                ? item.missed
                  ? 'Missed Call'
                  : 'Call'
                : 'Video'}
            </Text>
          </View>
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>
            {datetimeToHumanizeDate(item.datetime)}
          </Text>
        </View>
      </View>
    );
  }
}

export default CallsListItem;
