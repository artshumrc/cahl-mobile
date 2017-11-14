import { StyleSheet, Dimensions, Platform } from 'react-native';
import { Fonts, Colors } from '../../themes';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    marginBottom: 75,
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
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: Colors.subtitle,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  shareText: {
    fontSize: 15,
    color: Colors.subtitle,
  },
  textInput: {
    width: 333,
    height: (Platform.OS === 'ios') ? 25 : 40,
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

export default styles;
