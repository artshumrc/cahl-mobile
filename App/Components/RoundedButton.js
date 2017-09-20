import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const RoundedButton = props => (
  <TouchableOpacity style={props.buttonStyle.button} onPress={props.onPress}>
    <Icon name={props.icon} style={props.buttonStyle.buttonIcon} />
    <Text style={props.buttonStyle.buttonText}>{props.text}</Text>
  </TouchableOpacity>
);

RoundedButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string,
  buttonStyle: PropTypes.object.isRequired,
  icon: PropTypes.string,
};

RoundedButton.defaultProps = {
  text: '',
  icon: '',
};

export default RoundedButton;
