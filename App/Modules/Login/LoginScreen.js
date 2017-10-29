import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import FBSDK, { LoginManager } from 'react-native-fbsdk'

// components
import RoundedButton from '../../components/RoundedButton';

// styles
import styles from './LoginScreenStyles';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    this.handleTwitterSubmit = this.handleTwitterSubmit.bind(this);
    this.handleFacebookSubmit = this.handleFacebookSubmit.bind(this);
    this.handleGoogleSubmit = this.handleGoogleSubmit.bind(this);
  }

  static navigationOptions = {
    title: 'Sign In'
  }

  _fbAuth() {
    LoginManager.logInWithReadPermissions(['public_profile']).then(
       function(result) {
         console.log(result)
          if (result.isCancelled) {
             alert('Login cancelled');
          } else {
             alert('Login success with permissions: '
             +result.grantedPermissions.toString());
          }
       },
       function(error) {
          alert('Login fail with error: ' + error);
       }
    );
 }

  handleTwitterSubmit() {
    const { navigate } = this.props.navigation;
    navigate('CommentsScreen');
  }

  handleFacebookSubmit() {
    const { navigate } = this.props.navigation;
    this._fbAuth();
    navigate('CommentsScreen');
  }

  handleGoogleSubmit() {
    const { navigate } = this.props.navigation;
    navigate('CommentsScreen');
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.textBox}>
          <Text style={styles.title}>Charlie Archive</Text>
          <Text style={styles.subtitle}>at the Harvard Library</Text>
        </View>
        <View style={styles.buttonBox}>
          <RoundedButton
            onPress={() => this.handleTwitterSubmit}
            text="Sign in with Twitter"
            icon="twitter"
            buttonStyle={styles.twitterButton}
            buttonTextStyle={styles.buttonText}
            buttonIconStyle={styles.buttonIcon}
          />
          <RoundedButton
            onPress={this.handleFacebookSubmit}
            text="Sign in with Facebook"
            icon="facebook"
            buttonStyle={styles.facebookButton}
            buttonTextStyle={styles.buttonText}
            buttonIconStyle={styles.buttonIcon}
          />
          <RoundedButton
            onPress={() => this.handleGoogleSubmit}
            text="Sign in with Google"
            icon="google"
            buttonStyle={styles.googleButton}
            buttonTextStyle={styles.buttonText}
            buttonIconStyle={styles.buttonIcon}
          />
        </View>
      </ScrollView>
    );
  }
}

export default LoginScreen;
