import { StackNavigator, TabNavigator } from 'react-navigation';
import LoginScreen from '../Modules/Login/LoginScreen';
import CommentsScreen from '../Modules/Comments/CommentsScreen';
import ExhibitsScreen from '../Modules/Exhibits/ExhibitsScreen';
import StoriesScreen from '../Modules/Stories/StoriesScreen';

import styles from './NavigationStyles';


const ExhibitStoriesTabNav = TabNavigator({
  ExhibitsTab: {
    screen: ExhibitsScreen,
    path: '/',
    navigationOptions: {
    },
  },
  StoriesTab: {
    screen: StoriesScreen,
    path: '/stories',
    navigationOptions: {
    },
  },
}, {
  tabBarPosition: 'top',
  animationEnabled: true,
});

const PrimaryNav = StackNavigator({
  Root: {
    screen: ExhibitStoriesTabNav,
    navigationOptions: {
      header: null,
    },
  },
  ExhibitsScreen: { screen: ExhibitsScreen },
  CommentsScreen: { screen: CommentsScreen },
  LoginScreen: { screen: LoginScreen },
}, {
  navigationOptions: {
    headerStyle: styles.header,
  },
});

export default PrimaryNav;
