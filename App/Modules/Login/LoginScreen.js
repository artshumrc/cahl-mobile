import React, { PropTypes } from 'react'
import { View, ScrollView, Text } from 'react-native'

// components
import RoundedButton from '../../Components/RoundedButton'

// styles
import { LoginStyles, TwitterButtonStyles, GoogleButtonStyles, FacebookButtonStyles } from './LoginScreenStyles'


export default class LoginScreen extends React.Component {
  constructor (props) {
    super(props)

  }

  render () {
    return (
      <ScrollView style={LoginStyles.container}>
        <View style={LoginStyles.textBox}>
          <Text style={LoginStyles.title}>Charlie Archive</Text>
          <Text style={LoginStyles.subtitle}>at the Harvard Library</Text>
        </View>
        <View style={LoginStyles.buttonBox}>
          <RoundedButton
            onPress={() => console.log('twitter button pressed')}
            text='Sign in with Twitter'
            icon='twitter'
            buttonStyle={TwitterButtonStyles}
          />
          <RoundedButton
            onPress={() => console.log('facebook button pressed')}
            text='Sign in with Facebook'
            icon='facebook'
            buttonStyle={FacebookButtonStyles}
          />
          <RoundedButton
            onPress={() => console.log('google button pressed')}
            text='Sign in with Google'
            icon='google'
            buttonStyle={GoogleButtonStyles}
          />
        </View>
      </ScrollView>
    )
  }
}
