import { StyleSheet } from 'react-native';
import { Fonts, Colors } from '../../Themes/';

export default StyleSheet.create({
  button: {
    marginVertical: 5,
    backgroundColor: Colors.twitter,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 250,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  buttonText: {
    margin: 18,
    textAlign: 'center',
    color: Colors.white,
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.bold,
  },
  buttonIcon: {
    margin: 18,
    color: Colors.white,
    fontSize: Fonts.size.regular,
  },
});
