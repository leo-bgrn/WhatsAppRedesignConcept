import EStyleSheet from 'react-native-extended-stylesheet';

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
    color: 'white',
    fontSize: '28rem',
  },
  nameView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '12rem',
  },
  nameText: {
    fontFamily: 'SFProText-Medium',
    color: '#B1B1B1',
    textAlign: 'center',
    fontSize: '13rem',
  },
});
