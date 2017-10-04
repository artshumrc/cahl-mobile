import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../themes';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.white,
    paddingTop: 35,
    borderBottomWidth: 1,
    borderBottomColor: Colors.subtitle,
    paddingBottom: 10,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,

  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 20,
  },
  exhibitsLabel: {
    paddingRight: 15,
  },
  labelText: {
    fontSize: 16,
    fontFamily: Fonts.type.demiBold,
  },
  languageLabel: {
    paddingLeft: 15,
  },
});

export default styles;
