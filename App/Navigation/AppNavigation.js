import { StackNavigator, TabNavigator } from 'react-navigation';
import LoginScreen from '../Modules/Login/LoginScreen';
import CommentsScreen from '../Modules/Comments/CommentsScreen';
import ExhibitsScreen from '../Modules/Exhibits/ExhibitsScreen';
import StoriesScreen from '../Modules/Stories/StoriesScreen';

import styles from './NavigationStyles';

const PrimaryNav = TabNavigator({
  ExhibitsScreen: { screen: ExhibitsScreen },
  StoriesScreen: { screen: StoriesScreen },
}, {
  tabBarPosition: 'top',
  animationEnabled: true,
});

export const CommentsNav = StackNavigator({
  LoginScreen: { screen: LoginScreen },
  CommentsScreen: { screen: CommentsScreen },
}, {
  headerMode: 'screen',
  initialRouteName: 'CommentsScreen',
  navigationOptions: {
    headerStyle: styles.header,
  },
});

export default PrimaryNav;
