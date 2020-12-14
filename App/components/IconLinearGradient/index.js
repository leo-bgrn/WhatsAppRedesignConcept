import React from 'react';
import MaskedView from '@react-native-community/masked-view';
import LinearGradient from 'react-native-linear-gradient';
import {Icon} from 'react-native-elements';
import {View} from 'react-native';
import {styles} from './styles';
import {COLORS} from '/assets/styles/styles.js';

const IconLinearGradient = ({children}) => {
  return (
    <MaskedView
      style={styles.maskedView}
      maskElement={<View style={styles.iconView}>{children}</View>}>
      <LinearGradient
        style={{flex: 1}}
        colors={[COLORS.common.gradientStart, COLORS.common.gradientEnd]}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 0}}
      />
    </MaskedView>
  );
};

export default IconLinearGradient;
