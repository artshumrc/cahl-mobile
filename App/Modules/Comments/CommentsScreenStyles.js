import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../Themes';

const CommentsScreenStyles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  }
});

const CommentStyles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  name: {
    fontFamily: Fonts.type.bold
  },
  text: {
    fontFamily: Fonts.type.base,
  },
  date: {
    fontFamily: Fonts.type.base,
    color: Colors.subtitle
  },
  image: {
    margin: 10,
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  commentText: {
    flexDirection: 'row',
    marginTop: 10,
  }
});

export { CommentsScreenStyles, CommentStyles };
