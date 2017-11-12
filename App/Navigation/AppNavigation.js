import React from 'react';
import { StackNavigator } from 'react-navigation';
import I18n from 'react-native-i18n';

import CustomTabs from './CustomTabs';

// views
import LoginScreen from '../modules/Login';
import CommentsScreen from '../modules/Comments';
import ShareStory from '../modules/Stories/ShareStoryScreen';

// styles
import styles from './NavigationStyles';

// translations
import en from '../i18n/languages/english.json';
import fr from '../i18n/languages/fr.json';

I18n.translations = {
  en,
  fr,
};

const PrimaryNav = StackNavigator({
  Root: {
    screen: CustomTabs,
    navigationOptions: {
      header: null,
    },
  },
  CommentsScreen: {
    screen: CommentsScreen,
    navigationOptions: {
      title: I18n.t('comments'),
    },
  },
  LoginScreen: { screen: LoginScreen },
  ShareStory: {
    screen: ShareStory,
    navigationOptions: {
      title: 'Share Your Story',
    },
  },
}, {
  navigationOptions: {
    headerStyle: styles.header,
  },
});

export default PrimaryNav;
