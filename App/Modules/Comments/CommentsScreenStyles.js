import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../Themes';

const CommentsScreenStyles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  textInput: {
    height: 40,
    width: 250,
    color: Colors.subtitle,
  },
  image: {
    marginRight: 10,
    height: 30,
    width: 30,
    borderRadius: 15,
  },
});

const CommentStyles = StyleSheet.create({
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
});

export { CommentsScreenStyles, CommentStyles };
