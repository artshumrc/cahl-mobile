import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Colors, Fonts } from '../../themes';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  instructionText: {
    fontFamily: Fonts.type.base,
    fontSize: 20,
    color: Colors.subtitle,
    paddingTop: 200,
  },
  textInput: {
    alignSelf: 'center',
    width: 300,
    height: 100,
    fontSize: Fonts.size.h1,
    fontFamily: Fonts.type.bold,
  },
  button: {
    backgroundColor: '#5A90DC',
    height: 50,
    width: Dimensions.get('window').width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: Colors.white,
    fontFamily: Fonts.type.bold,
    fontSize: 18,
  },
  buttonNotReady: {
    backgroundColor: '#D0D0D0',
    height: 50,
    width: Dimensions.get('window').width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTextNotReady: {
    color: Colors.subtitle,
    fontFamily: Fonts.type.bold,
    fontSize: 18,
  },
});

export default styles;
