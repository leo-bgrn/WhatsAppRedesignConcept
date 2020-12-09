import EStyleSheet from 'react-native-extended-stylesheet';
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
    backgroundColor: 'white',
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
    backgroundColor: '#5CE27F',
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
    fontFamily: 'SFProText-Bold',
    fontSize: '15rem',
  },
  typeContainer: {
    marginTop: '3rem',
    flexDirection: 'row',
    alignItems: 'center',
  },
  typeText: {
    color: '#B1B1B1',
    fontFamily: 'SFProText-Regular',
  },
  dateContainer: {
    marginRight: '15rem',
  },
  dateText: {
    color: '#B1B1B1',
    fontFamily: 'SFProText-Regular',
  },
  missedText: {
    color: '#E25C5C',
  },
});
