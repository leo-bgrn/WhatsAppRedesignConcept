import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import MaskedView from '@react-native-community/masked-view';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';
import IconLinearGradient from '/components/IconLinearGradient';
import {useTheme} from 'react-navigation';
import {COLORS} from '/assets/styles/styles';

export default CallsHeader = () => {
  const theme = useTheme();
  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text style={[styles.title, {color: COLORS[theme].grey1}]}>Calls</Text>
      </View>
      <View style={styles.addContactLogoContainer}>
        <IconLinearGradient>
          <Icon
            name="account-multiple-plus"
            type="material-community"
            size={35}
          />
        </IconLinearGradient>
      </View>
    </View>
  );
};
