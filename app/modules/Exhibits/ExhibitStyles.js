import { StyleSheet, Dimensions } from 'react-native';
import { Colors, Fonts } from '../../themes';

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10,
  },
  image: {
    width: 500,
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

export default styles;
