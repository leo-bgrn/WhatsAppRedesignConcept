import EStyleSheet from 'react-native-extended-stylesheet';
import {REGULAR_FONT, COLORS} from '/assets/styles/styles.js';

export const styles = EStyleSheet.create({
  messageMainContainer: {
    flex: 1,
    flexDirection: 'column',
    marginRight: '10rem',
    marginLeft: '10rem',
    marginBottom: '8rem',
    marginTop: '8rem',
  },
  ownMessageContainer: {
    paddingTop: '10rem',
    paddingBottom: '10rem',
    paddingRight: '15rem',
    paddingLeft: '15rem',
    maxWidth: '80%',
    alignSelf: 'flex-end',
    borderBottomLeftRadius: '20rem',
    borderBottomRightRadius: 0,
    borderTopLeftRadius: '20rem',
    borderTopRightRadius: '20rem',
  },
  otherMessageContainer: {
    paddingTop: '10rem',
    paddingBottom: '10rem',
    paddingRight: '15rem',
    paddingLeft: '15rem',
    maxWidth: '80%',
    alignSelf: 'flex-start',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: '20rem',
    borderTopLeftRadius: '20rem',
    borderTopRightRadius: '20rem',
  },
  textMessage: {
    fontFamily: REGULAR_FONT,
    fontSize: '15rem',
  },
  avatarContainer: {
    aspectRatio: 1,
    height: '30rem',
    alignSelf: 'flex-end',
    marginRight: '15rem',
  },
  avatar: {
    borderRadius: 1000,
    aspectRatio: 1,
  },
  connectedBadgeContainer: {
    height: '10rem',
    width: '10rem',
    borderRadius: 1000,
    position: 'absolute',
    bottom: '0rem',
    right: '0rem',
    alignItems: 'center',
    justifyContent: 'center',
  },
  connectedBadgeInside: {
    backgroundColor: COLORS.common.green,
    height: '5rem',
    width: '5rem',
    borderRadius: 1000,
  },
});
