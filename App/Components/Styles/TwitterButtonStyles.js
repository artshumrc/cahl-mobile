import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '../../Themes/'


export default StyleSheet.create({
  button: {
    marginVertical: 5,
    // borderTopColor: Colors.fire,
    // borderBottomColor: Colors.bloodOrange,
    // borderTopWidth: 1,
    // borderBottomWidth: 1,
    backgroundColor: Colors.twitterBlue,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    margin: 18,
    textAlign: 'center',
    color: Colors.white,
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.bold
  },
  buttonIcon: {
    margin: 18,
    color: Colors.white,
    fontSize: Fonts.size.regular,
  }
})
