import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../themes';

const styles = StyleSheet.create({
  commentContainer: {
    flexDirection: 'row',
  },
  name: {
    fontFamily: Fonts.type.bold,
  },
  text: {
    fontFamily: Fonts.type.base,

  },
  date: {
    fontFamily: Fonts.type.base,
    color: Colors.subtitle,
  },
  image: {
    margin: 10,
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  commentText: {
    marginTop: 10,
    width: 300,
    flexGrow: 1,
  },
  removeButtonText: {
    fontFamily: Fonts.type.base,
    color: Colors.subtitle,
  },
});

export default styles;
