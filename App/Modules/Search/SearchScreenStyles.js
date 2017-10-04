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
});

export default styles;
