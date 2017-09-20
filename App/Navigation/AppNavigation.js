import { StackNavigator } from 'react-navigation';
import LoginScreen from '../Modules/Login/LoginScreen';
import CommentsScreen from '../Modules/Comments/CommentsScreen';

import styles from './NavigationStyles';

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LoginScreen: { screen: LoginScreen },
  CommentsScreen: { screen: CommentsScreen},
}, {
  // Default config for all screens
  headerMode: 'screen',
  initialRouteName: 'LoginScreen',
  navigationOptions: {
    headerStyle: styles.header,
  },
});

export default PrimaryNav;
