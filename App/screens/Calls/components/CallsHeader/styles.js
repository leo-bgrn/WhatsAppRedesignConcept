import EStyleSheet from 'react-native-extended-stylesheet';
import {BOLD_FONT} from '/assets/styles/styles.js';

export const styles = EStyleSheet.create({
  mainContainer: {
    height: '50rem',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10rem',
  },
  titleContainer: {
    marginLeft: '30rem',
  },
  title: {
    fontFamily: BOLD_FONT,
    fontSize: '30rem',
  },
  addContactLogoContainer: {
    marginRight: '20rem',
    height: '53rem',
    aspectRatio: 1,
  },
});
