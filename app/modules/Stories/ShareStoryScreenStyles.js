import { StyleSheet, Dimensions } from 'react-native';
import { Colors, Fonts } from '../../themes';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    backgroundColor: Colors.white,
    flex: 1,
  },
  inputContainer: {
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 30,
  },
  buttonBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    marginLeft: 30,
    marginRight: 30,
  },
  submitButton: {
    marginRight: 30,
  },
  submitButtonText: {
    fontFamily: Fonts.type.demiBold,
    color: Colors.subtitle,
    fontSize: Fonts.size.input
  },
  uploadPhotoButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 30,
  },
  uploadPhotoButtonText: {
    fontFamily: Fonts.type.demiBold,
    color: Colors.subtitle,
    paddingRight: 10,
    fontSize: Fonts.size.input
  }
});

export default styles;
