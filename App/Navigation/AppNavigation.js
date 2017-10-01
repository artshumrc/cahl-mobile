import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Flag from 'react-native-flags';

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
    navigationOptions: {
      labelStyle: styles.storiesLabel,
    },
  },
  SearchTab: {
    screen: SearchScreen,
    tabBarOptions: {
      labelStyle: styles.searchLabel,
    },
  },
  languageTab: {
    screen: ExhibitsScreen,
    tabBarOptions: {
      labelStyle: styles.languageLabel,
    },
    navigationOptions: {
      tabBarLabel: <Flag code="FR" size={24} type="shiny" style={{ left: 45, bottom: 4 }} />,
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
  ExhibitsScreen: { screen: ExhibitsScreen },
  CommentsScreen: { screen: CommentsScreen },
  LoginScreen: { screen: LoginScreen },
}, {
  navigationOptions: {
    headerStyle: styles.header,
  },
});

export default PrimaryNav;
