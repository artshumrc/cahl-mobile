import { StackNavigator } from 'react-navigation'
import LoginScreen from '../Modules/Login/LoginScreen'

import styles from './NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LoginScreen: { screen: LoginScreen, navigationOptions: {title: 'Sign In'} }
}, {
  // Default config for all screens
  headerMode: 'screen',
  initialRouteName: 'LoginScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
