import EStyleSheet from 'react-native-extended-stylesheet';
import {REGULAR_FONT, BOLD_FONT} from '/assets/styles/styles.js';

export const styles = EStyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    flexDirection: 'column',
  },
  timerContainer: {
    flexDirection: 'row',
    margin: '8rem',
  },
  timerNotFilled: {
    backgroundColor: '#B1B1B1',
    margin: '2rem',
    borderRadius: '100rem',
    flexDirection: 'row',
    height: '3rem',
    flex: 1,
  },
  timerFilled: {
    backgroundColor: '#E1E1E1',
    borderRadius: '100rem',
  },
  topContainer: {
    height: '60rem',
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    aspectRatio: 1,
    height: '40rem',
    marginLeft: '10rem',
  },
  avatar: {
    flex: 1,
    borderRadius: 1000,
  },
  nameContainer: {
    marginLeft: '10rem',
  },
  nameText: {
    fontFamily: BOLD_FONT,
    fontSize: '13rem',
    color: 'white',
  },
  dateText: {
    fontFamily: REGULAR_FONT,
    fontSize: '12rem',
    color: 'white',
  },
  bottomContainer: {
    marginBottom: '10rem',
  },
});
