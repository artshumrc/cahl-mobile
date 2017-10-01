import { StyleSheet, Dimensions } from 'react-native';
import { Fonts, Colors } from '../../themes';

const StoriesScreenStyles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
  headerContainer: {
    paddingBottom: 75,
  },
  questionText: {
    fontSize: 20,
    fontFamily: Fonts.type.base,
    alignSelf: 'flex-start',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 100,
  },
  submitStory: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,
    borderColor: Colors.subtitle,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    width: 333,
    height: 25,
    color: Colors.subtitle,
    fontSize: 14,
    marginTop: 10,
    marginBottom: 10,
  },
  submitIcon: {
    color: Colors.subtitle,
    fontSize: 16,
  },
});

const StoryStyles = StyleSheet.create({
  storyContainer: {
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomColor: Colors.subtitle,
    borderBottomWidth: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
    marginBottom: 10,
  },
  nameText: {
    fontSize: 14,
    fontFamily: Fonts.type.demiBold,
  },
  profileImage: {
    height: 30,
    width: 30,
    borderRadius: 15,
    marginRight: 5,
  },
  dateText: {
    fontSize: 12,
    fontFamily: Fonts.type.base,
    color: Colors.subtitle,
  },
  storyImage: {
    width: Dimensions.get('window').width,
    height: 200,
  },
  storyText: {
    fontSize: 14,
    fontFamily: Fonts.type.base,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
  },
  commentsButton: {
    marginLeft: 15,
  },
  commentsButtonText: {
    fontFamily: Fonts.type.base,
    color: Colors.subtitle,
    fontSize: 14,
  },
});

export { StoriesScreenStyles, StoryStyles };
