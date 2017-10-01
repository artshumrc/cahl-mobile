import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../Themes/';

export default StyleSheet.create({
  header: {
    backgroundColor: Colors.white,
  },
  tabHeader: {
    backgroundColor: Colors.white,
    color: Colors.subtitle,
    height: 80,
    borderBottomWidth: 1,
    borderBottomColor: Colors.subtitle,
    paddingBottom: 5,
  },
  tabLabel: {
    fontFamily: Fonts.type.demiBold,
    fontSize: 16,
  },
  storiesLabel: {
    position: 'relative',
    alignSelf: 'flex-start',
    fontFamily: Fonts.type.demiBold,
    fontSize: 16,
    color: Colors.facebook,
  },
  searchLabel: {

  },
  languageLabel: {

  },
});
