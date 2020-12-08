import React from 'react';
import {View, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import MaskedView from '@react-native-community/masked-view';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';

class ChatsHeader extends React.Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Chats</Text>
        </View>
        <View style={styles.addContactLogoContainer}>
          <MaskedView
            style={styles.maskedView}
            maskElement={
              <View style={styles.iconView}>
                <Icon
                  name="account-multiple-plus"
                  type="material-community"
                  size={35}
                />
              </View>
            }>
            <LinearGradient
              style={{flex: 1}}
              colors={['#5CE27F', '#5CABE2']}
              start={{x: 0, y: 1}}
              end={{x: 1, y: 0}}
            />
          </MaskedView>
        </View>
      </View>
    );
  }
}

export default ChatsHeader;
