import EStyleSheet from 'react-native-extended-stylesheet';
import {REGULAR_FONT, BOLD_FONT, COLORS} from '/assets/styles/styles.js';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export const styles = EStyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    height: '110rem',
    alignItems: 'center',
    flexShrink: 1,
    flex: 1,
    width: '100%',
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
    fontFamily: BOLD_FONT,
    fontSize: '15rem',
  },
  dateContainer: {
    marginRight: '15rem',
  },
  dateText: {
    fontFamily: REGULAR_FONT,
  },
  messageContainer: {
    marginTop: '10rem',
    flexShrink: 1,
  },
  messageText: {
    flexShrink: 1,
    fontFamily: REGULAR_FONT,
  },
  deleteSwipeableContainer: {
    backgroundColor: COLORS.common.red,
    width: width/6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionsSwipeableContainer: {
    width: width/6,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
