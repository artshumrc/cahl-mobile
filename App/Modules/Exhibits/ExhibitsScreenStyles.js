import { StyleSheet, Dimensions } from 'react-native';
import { Colors, Fonts } from '../../themes';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
  commentsButton: {
    marginLeft: 15,
  },
  commentsButtonText: {
    fontFamily: Fonts.type.base,
    color: Colors.subtitle,
    fontSize: 14,
  },
  showMoreText: {
    fontFamily: Fonts.type.base,
    color: Colors.subtitle,
    fontSize: 14,
  },
  textBox: {
    marginTop: 100,
    marginBottom: 100,
    marginLeft: 15,
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
});

export default styles;
