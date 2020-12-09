import React from 'react';
import MaskedView from '@react-native-community/masked-view';
import LinearGradient from 'react-native-linear-gradient';
import {Icon} from 'react-native-elements';
import {View} from 'react-native';
import {styles} from './styles';

const IconLinearGradient = ({children}) => {
  return (
    <MaskedView
      style={styles.maskedView}
      maskElement={<View style={styles.iconView}>{children}</View>}>
      <LinearGradient
        style={{flex: 1}}
        colors={['#5CE27F', '#5CABE2']}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 0}}
      />
    </MaskedView>
  );
};

export default IconLinearGradient;
