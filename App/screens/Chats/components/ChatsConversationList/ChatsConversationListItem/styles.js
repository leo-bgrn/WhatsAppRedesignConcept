import EStyleSheet from 'react-native-extended-stylesheet';
export const styles = EStyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    height: '110rem',
    alignItems: 'center',
    flexShrink: 1,
    flex: 1,
  },
  textContainer: {
    flexDirection: 'column',
    flexShrink: 1,
    flex: 1,
  },
  topMessageContainer: {
    flex: 0.35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexShrink: 1,
  },
  bottomMessageContainer: {
    flex: 0.65,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexShrink: 1,
    flexDirection: 'row',
  },
  nameContainer: {},
  nameText: {
    fontFamily: 'SFProText-Bold',
    fontSize: '15rem',
  },
  dateContainer: {
    marginRight: '15rem',
  },
  dateText: {
    color: '#B1B1B1',
    fontFamily: 'SFProText-Regular',
  },
  messageContainer: {
    marginTop: '10rem',
    flexShrink: 1,
  },
  messageText: {
    flexShrink: 1,
    color: '#B1B1B1',
    fontFamily: 'SFProText-Regular',
  },
});
