import React from 'react';
import {styles} from './styles';
import {View, TextInput} from 'react-native';
import {Icon} from 'react-native-elements';
import {useTheme} from 'react-navigation';
import {COLORS} from '/assets/styles/styles';
import IconLinearGradient from '/components/IconLinearGradient';

const Texting = ({isOnStory = false}) => {
  const theme = useTheme();
  return (
    <View style={styles.mainContainer}>
      <View style={[styles.iconContainer, {borderColor: COLORS[theme].grey3}]}>
        {theme === 'light' && !isOnStory ? (
          <IconLinearGradient>
            <Icon name="camera-outline" type="ionicon" size={32} />
          </IconLinearGradient>
        ) : (
          <Icon
            name="camera-outline"
            type="ionicon"
            size={32}
            color={!isOnStory ? COLORS[theme].grey2 :  COLORS.light.grey4}
          />
        )}
      </View>
      <View
        style={[styles.textInputContainer, {borderColor: COLORS[theme].grey3}]}>
        <TextInput style={styles.textInput} placeholder="Respond..." />
      </View>
      <View style={[styles.iconContainer, {borderColor: COLORS[theme].grey3}]}>
        {theme === 'light' && !isOnStory ? (
          <IconLinearGradient>
            <Icon name="mic" type="ionicon" size={30} />
          </IconLinearGradient>
        ) : (
          <Icon
            name="mic"
            type="ionicon"
            size={30}
            color={!isOnStory ? COLORS[theme].grey2 :  COLORS.light.grey4}
          />
        )}
      </View>
      <View
        style={[
          styles.iconContainer,
          {borderColor: COLORS[theme].grey3},
          styles.lastIconContainer,
        ]}>
        <Icon
          name="ellipsis-horizontal"
          type="ionicon"
          size={30}
          color={COLORS[theme].grey3}
        />
      </View>
    </View>
  );
};

export default Texting;
