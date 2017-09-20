import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../Themes';

const RoundedButtonStyles = {
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
};

const TwitterButtonStyles = StyleSheet.create({
  button: {
    ...RoundedButtonStyles.button,
    backgroundColor: Colors.twitter,
  },
  buttonText: {
    ...RoundedButtonStyles.buttonText,
  },
  buttonIcon: {
    ...RoundedButtonStyles.buttonIcon,
  },
});

const GoogleButtonStyles = StyleSheet.create({
  button: {
    ...RoundedButtonStyles.button,
    backgroundColor: Colors.google,
  },
  buttonText: {
    ...RoundedButtonStyles.buttonText,
  },
  buttonIcon: {
    ...RoundedButtonStyles.buttonIcon,
  },
});

const FacebookButtonStyles = StyleSheet.create({
  button: {
    ...RoundedButtonStyles.button,
    backgroundColor: Colors.facebook,
  },
  buttonText: {
    ...RoundedButtonStyles.buttonText,
  },
  buttonIcon: {
    ...RoundedButtonStyles.buttonIcon,
  },
});

const LoginStyles = StyleSheet.create({
  textBox: {
    marginTop: 100,
    marginBottom: 100,
    alignItems: 'center',
    justifyContent: 'space-around',

  },
  title: {
    fontSize: Fonts.size.h2,
    fontFamily: Fonts.type.heavy,
  },
  subtitle: {
    fontSize: Fonts.size.h6,
    fontFamily: Fonts.size.demiBold,
    color: Colors.subtitle,
  },
  buttonBox: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container: {
    backgroundColor: Colors.white,
  },
});

export { TwitterButtonStyles, GoogleButtonStyles, FacebookButtonStyles, LoginStyles };
