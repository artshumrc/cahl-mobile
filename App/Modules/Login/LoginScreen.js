import React from 'react';
import { View, ScrollView, Text } from 'react-native';

// components
import RoundedButton from '../../Components/RoundedButton';

// styles
import { LoginStyles, TwitterButtonStyles, GoogleButtonStyles, FacebookButtonStyles } from './LoginScreenStyles';


export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    this.handleTwitterSubmit = this.handleTwitterSubmit.bind(this);
    this.handleFacebookSubmit = this.handleFacebookSubmit.bind(this);
    this.handleGoogleSubmit = this.handleGoogleSubmit.bind(this);
  }

  handleTwitterSubmit() {

  }

  handleFacebookSubmit() {

  }

  handleGoogleSubmit() {

  }

  render() {
    return (
      <ScrollView style={LoginStyles.container}>
        <View style={LoginStyles.textBox}>
          <Text style={LoginStyles.title}>Charlie Archive</Text>
          <Text style={LoginStyles.subtitle}>at the Harvard Library</Text>
        </View>
        <View style={LoginStyles.buttonBox}>
          <RoundedButton
            onPress={() => this.handleTwitterSubmit}
            text="Sign in with Twitter"
            icon="twitter"
            buttonStyle={TwitterButtonStyles}
          />
          <RoundedButton
            onPress={() => this.handleFacebookSubmit}
            text="Sign in with Facebook"
            icon="facebook"
            buttonStyle={FacebookButtonStyles}
          />
          <RoundedButton
            onPress={() => this.handleGoogleSubmit}
            text="Sign in with Google"
            icon="google"
            buttonStyle={GoogleButtonStyles}
          />
        </View>
      </ScrollView>
    );
  }
}
