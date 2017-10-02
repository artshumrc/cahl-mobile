import React from 'react';
import { View, ScrollView, Text } from 'react-native';

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

  handleTwitterSubmit() {
    const { navigate } = this.props.navigation;
    navigate('CommentsScreen');
  }

  handleFacebookSubmit() {
    const { navigate } = this.props.navigation;
    navigate('CommentsScreen');
  }

  handleGoogleSubmit() {
    const { navigate } = this.props.navigation;
    navigate('CommentsScreen');
  }

  render() {
    const { navigate } = this.props.navigation;
    console.log(this.props);
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
            butonTextStyle={styles.buttonText}
            buttonIconStyle={styles.buttonIcon}
          />
          <RoundedButton
            onPress={() => this.handleFacebookSubmit}
            text="Sign in with Facebook"
            icon="facebook"
            buttonStyle={styles.facebookButton}
            butonTextStyle={styles.buttonText}
            buttonIconStyle={styles.buttonIcon}
          />
          <RoundedButton
            onPress={() => this.handleGoogleSubmit}
            text="Sign in with Google"
            icon="google"
            buttonStyle={styles.googleButton}
            butonTextStyle={styles.buttonText}
            buttonIconStyle={styles.buttonIcon}
          />
        </View>
      </ScrollView>
    );
  }
}

export default LoginScreen;
