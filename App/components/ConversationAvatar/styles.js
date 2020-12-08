import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
  avatarContainer: {
    margin: '20rem',
    aspectRatio: 1,
    height: '80rem',
  },
  singleAvatar: {
    borderRadius: 1000,
    aspectRatio: 1,
  },
  firstGroupAvatar: {
    borderRadius: 1000,
    height: '63rem',
    aspectRatio: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: 1000,
    borderWidth: '3rem',
    borderColor: 'white',
  },
  secondGroupAvatar: {
    borderRadius: 1000,
    height: '60rem',
    aspectRatio: 1,
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderRadius: 1000,
    borderWidth: '3rem',
    borderColor: 'white',
  },
  connectedBadgeContainer: {
    backgroundColor: 'white',
    height: '18rem',
    width: '18rem',
    borderRadius: 1000,
    position: 'absolute',
    bottom: '3rem',
    right: '3rem',
    alignItems: 'center',
    justifyContent: 'center',
  },
  connectedBadgeInside: {
    backgroundColor: '#5CE27F',
    height: '12rem',
    width: '12rem',
    borderRadius: 1000,
  },
});
