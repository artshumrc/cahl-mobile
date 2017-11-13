import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import FBSDK, { LoginManager, AccessToken } from 'react-native-fbsdk';
import firebase from 'firebase';
import Config from 'react-native-config';
import I18n from 'react-native-i18n'

// components
import RoundedButton from '../../components/RoundedButton';

// styles
import styles from './LoginScreenStyles';

// translations
import en from '../../i18n/languages/english';
import fr from '../../i18n/languages/fr.json';

I18n.translations = {
  en,
  fr,
};

const config = {
  apiKey: Config.FIREBASE_API_KEY,
  authDomain: Config.AUTH_DOMAIN,
  databaseUrl: Config.FIREBASE_DATABASE_URL,
};

const firebaseRef = firebase.initializeApp(config);

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    this.handleFacebookSubmit = this.handleFacebookSubmit.bind(this);
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

  handleFacebookSubmit() {
    const { navigate } = this.props.navigation;
    const { itemId } = this.props.navigation.state.params;
    this.facebookAuth();
    navigate('CommentsScreen', { itemId });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.textBox}>
          <Text style={styles.title}>{I18n.t('charlieArchive')}</Text>
          <Text style={styles.subtitle}>{I18n.t('atHUL')}</Text>
        </View>
        <View style={styles.buttonBox}>
          <RoundedButton
            onPress={this.handleFacebookSubmit}
            text={I18n.t('signInFB')}
            icon="facebook"
            buttonStyle={styles.facebookButton}
            buttonTextStyle={styles.buttonText}
            buttonIconStyle={styles.buttonIcon}
          />
        </View>
      </ScrollView>
    );
  }
}

export default LoginScreen;
