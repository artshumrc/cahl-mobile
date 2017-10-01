import React from 'react';
import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../Themes';

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
  tabLabel: {
    fontSize: 19,
    left: 85,
    bottom: 6,
  },
  textInput: {
    width: 50,
    height: 10,
  },
});

export default styles;
