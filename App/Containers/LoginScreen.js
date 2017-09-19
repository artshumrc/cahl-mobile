import React, { PropTypes } from 'react'
import { View, ScrollView, Text } from 'react-native'

// components
import FacebookButton from '../Components/FacebookButton'
import GoogleButton from '../Components/GoogleButton'
import TwitterButton from '../Components/TwitterButton'

// styles
import styles from './Styles/LoginScreenStyles'

export default class LoginScreen extends React.Component {
  constructor (props) {
    super(props)

  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.textBox}>
          <Text style={styles.title}>Charlie Archive</Text>
          <Text style={styles.subtitle}>at the Harvard Library</Text>
        </View>
        <View>
          <TwitterButton
            text='Sign in with Twitter'
            onPress={() => console.log('twitter button pressed')}
           />
          <FacebookButton
            text='Sign in with Facebook'
            onPress={() => console.log('fb button pressed')}
          />
          <GoogleButton
            text='Sign in with Google'
            onPress={() => console.log('google button pressed')}
          />
        </View>
      </View>
    )
  }
}
