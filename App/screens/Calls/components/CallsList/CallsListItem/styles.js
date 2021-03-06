import EStyleSheet from 'react-native-extended-stylesheet';
import {REGULAR_FONT, BOLD_FONT, COLORS} from '/assets/styles/styles.js';

export const styles = EStyleSheet.create({
  mainContainer: {
    flex: 1,
    height: '90rem',
    flexDirection: 'row',
    alignItems: 'center',
    flexShrink: 1,
  },
  avatarContainer: {
    margin: '15rem',
    aspectRatio: 1,
    height: '60rem',
  },
  avatar: {
    borderRadius: 1000,
    aspectRatio: 1,
  },
  connectedBadgeContainer: {
    height: '15rem',
    width: '15rem',
    borderRadius: 1000,
    position: 'absolute',
    bottom: '0rem',
    right: '0rem',
    alignItems: 'center',
    justifyContent: 'center',
  },
  connectedBadgeInside: {
    backgroundColor: COLORS.common.green,
    height: '10rem',
    width: '10rem',
    borderRadius: 1000,
  },
  textContainer: {
    flex: 1,
    marginLeft: '10rem',
  },
  nameContainer: {
    marginBottom: '3rem',
  },
  nameText: {
    fontFamily: BOLD_FONT,
    fontSize: '15rem',
  },
  typeContainer: {
    marginTop: '3rem',
    flexDirection: 'row',
    alignItems: 'center',
  },
  typeText: {
    fontFamily: REGULAR_FONT,
  },
  dateContainer: {
    marginRight: '15rem',
  },
  dateText: {
    fontFamily: REGULAR_FONT,
  },
});
