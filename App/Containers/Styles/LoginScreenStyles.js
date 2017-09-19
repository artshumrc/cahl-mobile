import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../Themes'

export default StyleSheet.create({
  textBox: {
    marginTop: 100,
    marginBottom: 100,
    alignItems: 'center',
    justifyContent: 'space-around',

  },
  title: {
    fontSize: Fonts.size.h2,
    fontFamily: Fonts.type.heavy
  },
  subtitle: {
    fontSize: Fonts.size.h6,
    fontFamily: Fonts.size.demiBold,
    color: Colors.subtitle
  },
  container: {
    backgroundColor: Colors.white,
    justifyContent: 'space-around'
  }
})
