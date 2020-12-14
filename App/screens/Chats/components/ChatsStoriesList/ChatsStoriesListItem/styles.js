import EStyleSheet from 'react-native-extended-stylesheet';
import {MEDIUM_FONT, COLORS} from '/assets/styles/styles.js';

export const styles = EStyleSheet.create({
  mainContainer: {
    width: '80rem',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarContainer: {
    borderRadius: 1000,
    aspectRatio: 1,
    height: '50rem',
    alignItems: 'center',
    justifyContent: 'center',
  },
  newStatusImageContainer: {
    height: '58rem',
    alignItems: 'center',
    justifyContent: 'center',
    aspectRatio: 1,
  },
  plusText: {
    fontSize: '28rem',
  },
  nameView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '12rem',
  },
  nameText: {
    fontFamily: MEDIUM_FONT,
    textAlign: 'center',
    fontSize: '13rem',
  },
});
