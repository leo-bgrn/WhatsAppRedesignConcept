import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
  },
  timerContainer: {
    height: '20rem',
  },
  timerNotFilled: {
    backgroundColor: '#B1B1B1',
    margin: '10rem',
    borderRadius: '100rem',
    flexDirection: 'row',
    height: '3rem',
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
    fontFamily: 'SFProText-Bold',
    fontSize: '13rem',
    color: 'white',
  },
  dateText: {
    fontFamily: 'SFProText-Regular',
    fontSize: '12rem',
    color: 'white',
  },
  bottomContainer: {
    backgroundColor: 'yellow',
  },
});
