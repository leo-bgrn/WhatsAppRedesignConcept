import EStyleSheet from 'react-native-extended-stylesheet';
import {REGULAR_FONT, BOLD_FONT, COLORS} from '/assets/styles/styles.js';

export const styles = EStyleSheet.create({
  mainContainer: {
    height: '50rem',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '10rem',
  },
  avatarContainer: {
    margin: '15rem',
    aspectRatio: 1,
    height: '45rem',
  },
  avatar: {
    borderRadius: 1000,
    aspectRatio: 1,
  },
  connectedBadgeContainer: {
    height: '12rem',
    width: '12rem',
    borderRadius: 1000,
    position: 'absolute',
    bottom: '0rem',
    right: '0rem',
    alignItems: 'center',
    justifyContent: 'center',
  },
  connectedBadgeInside: {
    backgroundColor: COLORS.common.green,
    height: '8rem',
    width: '8rem',
    borderRadius: 1000,
  },
  firstGroupAvatar: {
    borderRadius: 1000,
    height: '35rem',
    aspectRatio: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: 1000,
    borderWidth: '3rem',
  },
  secondGroupAvatar: {
    borderRadius: 1000,
    height: '30rem',
    aspectRatio: 1,
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderRadius: 1000,
    borderWidth: '3rem',
  },
  textContainer: {
    flex: 4,
  },
  nameContainer: {},
  nameText: {
    fontFamily: BOLD_FONT,
    fontSize: '17rem',
  },
  onlineFromContainer: {
    marginTop: '3rem',
  },
  onlineFromText: {
    fontFamily: REGULAR_FONT,
    fontSize: '15rem',
  },
});
