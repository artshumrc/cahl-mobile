import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const RoundedButton = props => (
  <TouchableOpacity style={props.buttonStyle} onPress={props.onPress}>
    <Icon name={props.icon} style={props.buttonIconStyle} />
    <Text style={props.buttonTextStyle}>{props.text}</Text>
  </TouchableOpacity>
);

RoundedButton.defaultProps = {
  text: '',
  icon: '',
};

export default RoundedButton;
