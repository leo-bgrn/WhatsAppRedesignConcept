import EStyleSheet from 'react-native-extended-stylesheet';
export const styles = EStyleSheet.create({
  mainContainer: {
    height: '50rem',
    flexDirection: 'row',
  },
  lastIconContainer: {
    marginRight: '10rem',
  },
  iconContainer: {
    borderRadius: 1000,
    borderWidth: '1rem',
    borderColor: '#313131',
    aspectRatio: 1,
    height: '45rem',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '10rem',
  },
  textInputContainer: {
    borderRadius: 1000,
    borderWidth: '1rem',
    borderColor: '#313131',
    height: '45rem',
    alignItems: 'stretch',
    justifyContent: 'center',
    marginLeft: '10rem',
    flex: 1,
  },
  textInput: {
    flex: 1,
    marginLeft: '10rem',
    marginRight: '10rem',
  },
});
