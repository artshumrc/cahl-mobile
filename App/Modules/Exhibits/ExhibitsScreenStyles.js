import { StyleSheet, Dimensions } from 'react-native';
import { Colors, Fonts } from '../../themes';

const ExhibitsScreenStyles = StyleSheet.create({
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

const ExhibitStyles = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width,
    height: 500,
  },
  number: {
    marginLeft: 15,
    fontSize: 16,
    fontFamily: Fonts.type.ultraLight,
  },
  description: {
    marginLeft: 15,
    fontSize: 14,
    fontFamily: Fonts.type.base,
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
});

export { ExhibitsScreenStyles, ExhibitStyles };
