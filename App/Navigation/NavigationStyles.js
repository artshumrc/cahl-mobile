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
  },
  tabLabel: {
    fontFamily: Fonts.type.demiBold,
    fontSize: 16,
  },
});
