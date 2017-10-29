import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import FBSDK, { LoginManager, AccessToken } from 'react-native-fbsdk';
import firebase from 'firebase';

// components
import RoundedButton from '../../components/RoundedButton';

// styles
import styles from './LoginScreenStyles';

const config = {
  apiKey: 'AIzaSyA9T3ymeQYY7ri8Ut-sAds9KsD3bQ_kYmE',
  authDomain: 'cahl-mobile.firebaseapp.com/',
  databaseUrl: 'https://cahl-mobile.firebaseio.com/'
}

const firebaseRef = firebase.initializeApp(config);

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

  facebookAuth() {
    LoginManager.logInWithReadPermissions(['public_profile', 'email']).then(result => {
      if (result.isCancelled) {
        alert('Login cancelled');
      } else {
        AccessToken.getCurrentAccessToken().then(accessTokenData => {
          const credential = firebase.auth.FacebookAuthProvider.credential(accessTokenData.accessToken);
          firebase.auth().signInWithCredential(credential).then(result => {
            console.log(result)
          }, error => console.log(error));
        }, error => console.log(error));
      }
    },
    error => alert('Login fail with error: ' + error));
  }

  handleTwitterSubmit() {
    const { navigate } = this.props.navigation;
    navigate('CommentsScreen');
  }

  handleFacebookSubmit() {
    const { navigate } = this.props.navigation;
    this.facebookAuth();
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
