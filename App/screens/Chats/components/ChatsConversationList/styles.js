import EStyleSheet from 'react-native-extended-stylesheet';
import {REGULAR_FONT} from '/assets/styles/styles.js';
export const styles = EStyleSheet.create({
  list: {
    flex: 1,
  },
  separator: {
    height: 1,
    width: '100%',
  },
  lastItemContainer: {
    height: '40rem',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lastItemText: {
    fontFamily: REGULAR_FONT,
  },
});
