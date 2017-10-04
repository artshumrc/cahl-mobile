import { StyleSheet, Dimensions } from 'react-native';
import { Fonts, Colors } from '../../themes';

const styles = StyleSheet.create({
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

export default styles;
