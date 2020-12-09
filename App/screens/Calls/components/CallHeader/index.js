import React from 'react';
import {View, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import {styles} from './styles';
import IconLinearGradient from '/components/IconLinearGradient';

class CallsHeader extends React.Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Calls</Text>
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
  }
}

export default CallsHeader;
