import React from 'react';
import {styles} from './styles';
import {View, Text, Image} from 'react-native';
import {datetimeToHumanizeDate} from '/utils/dateUtils';
import {Icon} from 'react-native-elements';
import {useTheme} from 'react-navigation';
import {COLORS} from '/assets/styles/styles';

const CallsListItem = ({call}) => {
  const theme = useTheme();

  renderAvatar = (item) => {
    return (
      <View style={styles.avatarContainer}>
        <Image
          source={{uri: item.person.profilPicture}}
          style={styles.avatar}
        />
        {item.person.isConnected && (
          <View
            style={[
              styles.connectedBadgeContainer,
              {backgroundColor: COLORS[theme].grey5},
            ]}>
            <View style={styles.connectedBadgeInside}></View>
          </View>
        )}
      </View>
    );
  };

  const {item} = call;
  return (
    <View style={styles.mainContainer}>
      {this.renderAvatar(item)}
      <View style={styles.textContainer}>
        <View style={styles.nameContainer}>
          <Text
            style={[
              styles.nameText,
              {color: item.missed ? COLORS.common.red : COLORS[theme].grey1},
            ]}>
            {item.person.displayName}
          </Text>
        </View>
        <View style={styles.typeContainer}>
          <Icon
            name={item.type === 'CALL' ? 'call' : 'videocam'}
            type="ionicon"
            size={15}
            color={item.missed ? COLORS.common.red : COLORS[theme].grey3}
          />
          <Text
            style={[
              styles.typeText,
              {color: item.missed ? COLORS.common.red : COLORS[theme].grey3},
            ]}>
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
        <Text style={[styles.dateText, {color: COLORS[theme].grey3}]}>
          {datetimeToHumanizeDate(item.datetime)}
        </Text>
      </View>
    </View>
  );
};

export default CallsListItem;
