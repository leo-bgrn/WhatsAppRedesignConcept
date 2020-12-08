import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
  mainContainer: {
    height: '50rem',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10rem',
  },
  titleContainer: {
    marginLeft: '30rem',
  },
  title: {
    fontFamily: 'SFProText-Bold',
    fontSize: '30rem',
  },
  addContactLogoContainer: {},
  maskedView: {
    height: '53rem',
    aspectRatio: 1,
    flexDirection: 'row',
  },
  iconView: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'flex-end',
    flex: 1,
    marginRight: '20rem',
  },
});
