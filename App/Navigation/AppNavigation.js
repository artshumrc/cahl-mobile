import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Flag from 'react-native-flags';
import Icon from 'react-native-vector-icons/FontAwesome';

// views
import LoginScreen from '../modules/Login';
import CommentsScreen from '../modules/Comments';
import ExhibitsScreen from '../modules/Exhibits';
import StoriesScreen from '../modules/Stories';
import SearchScreen from '../modules/Search';

// styles
import styles from './NavigationStyles';

// TODO: Position header correctly for tab navigator


const ExhibitStoriesTabNav = TabNavigator({
  ExhibitsTab: {
    screen: ExhibitsScreen,
  },
  StoriesTab: {
    screen: StoriesScreen,
  },
  SearchTab: {
    screen: SearchScreen,
    navigationOptions: {
      tabBarLabel: <Icon name="search" style={styles.searchLabel} />,
    },
  },
  languageTab: {
    screen: ExhibitsScreen,
    navigationOptions: {
      tabBarLabel: <Flag code="FR" size={24} type="shiny" style={styles.languageLabel} />,
    },
  },
}, {
  tabBarPosition: 'top',
  tabBarOptions: {
    style: styles.tabHeader,
    labelStyle: styles.tabLabel,
    activeTintColor: '#000',
  },
});

const PrimaryNav = StackNavigator({
  Root: {
    screen: ExhibitStoriesTabNav,
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
