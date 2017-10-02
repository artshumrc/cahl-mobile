import React from 'react';
import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../themes';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    alignItems: 'center',
  },
  instructionText: {
    fontFamily: Fonts.type.base,
    fontSize: 20,
    color: Colors.subtitle,
  },
  textInput: {
    width: 50,
    height: 10,
  },
});

export default styles;
