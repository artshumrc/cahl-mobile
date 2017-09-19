import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'


const RoundedButton = (props) => (
  <TouchableOpacity style={props.buttonStyle.button} onPress={props.onPress}>
    <Icon name={props.icon} style={props.buttonStyle.buttonIcon} />
    <Text style={props.buttonStyle.buttonText}>{props.text}</Text>
  </TouchableOpacity>
);

RoundedButton.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string,
  navigator: PropTypes.object,
  buttonStyle: PropTypes.object,
  buttonTextStyle: PropTypes.object,
  icon: PropTypes.string,
  buttonIconStyle: PropTypes.object
}

export default RoundedButton;
