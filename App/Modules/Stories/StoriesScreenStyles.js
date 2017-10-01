import { StyleSheet } from 'react-native';
import { Fonts, Colors } from '../../Themes';

const StoriesScreenStyles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
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

});

export { StoriesScreenStyles, StoryStyles };
