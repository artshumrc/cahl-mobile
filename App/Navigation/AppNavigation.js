import React from 'react';
import { StackNavigator } from 'react-navigation';

import CustomTabs from './CustomTabs';

// views
import LoginScreen from '../modules/Login';
import CommentsScreen from '../modules/Comments';

// styles
import styles from './NavigationStyles';

const PrimaryNav = StackNavigator({
  Root: {
    screen: CustomTabs,
    navigationOptions: {
      header: null,
    },
  },
  CommentsScreen: { screen: CommentsScreen },
  LoginScreen: { screen: LoginScreen },
}, {
  navigationOptions: {
    headerStyle: styles.header,
  },
});

export default PrimaryNav;
