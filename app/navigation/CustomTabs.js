import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import {
  createNavigator,
  createNavigationContainer,
  TabRouter,
  addNavigationHelpers,
} from 'react-navigation';
import I18n from 'react-native-i18n';

import CustomTabBar from './CustomTabBar';

// views
import ExhibitsScreen from '../modules/Exhibits';
import StoriesScreen from '../modules/Stories';
import SearchScreen from '../modules/Search';

// translations
import en from '../i18n/languages/english';
import fr from '../i18n/languages/fr.json';

I18n.translations = {
  en,
  fr,
};
class CustomTabView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      locale: I18n.locale,
    };

    this.toggleLocale = this.toggleLocale.bind(this);
  }

  toggleLocale() {
    const { locale } = this.state;
    if (locale === 'en') {
      I18n.locale = 'fr';
      this.setState({ locale: 'fr' });
    } else {
      I18n.locale = 'en';
      this.setState({ locale: 'en' });
    }
    console.log('Current locale', I18n.locale);
  }

  render() {
    const { router, navigation } = this.props;
    const { locale } = this.state;
    const { routes, index } = navigation.state;
    const ActiveScreen = router.getComponentForRouteName(routes[index].routeName);
    return (
      <View>
        <CustomTabBar
          navigation={navigation}
          toggleLocale={this.toggleLocale}
          locale={locale}
        />
        <ActiveScreen
          navigation={addNavigationHelpers({
            ...navigation,
            state: routes[index],
          })}
        />
      </View>
    );
  }
}
// const CustomTabView = ({ router, navigation }) => {
//   const { routes, index } = navigation.state;
//   const ActiveScreen = router.getComponentForRouteName(routes[index].routeName);
//   return (
//     <View>
//       <CustomTabBar navigation={navigation} />
//       <ActiveScreen
//         navigation={addNavigationHelpers({
//           ...navigation,
//           state: routes[index],
//         })}
//       />
//     </View>
//   );
// };

CustomTabView.propTypes = {
  router: PropTypes.shape({
    getComponentForRouteName: PropTypes.func,
  }).isRequired,
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      routes: PropTypes.arrayOf(PropTypes.shape({ routeName: PropTypes.string })),
      index: PropTypes.number,
    }),
  }).isRequired,
};

const CustomTabRouter = TabRouter(
  {
    Exhibits: {
      screen: ExhibitsScreen,
      path: '',
    },
    Stories: {
      screen: StoriesScreen,
      path: 'stories',
    },
    Search: {
      screen: SearchScreen,
      path: 'search',
    },
  },
  {
    initialRouteName: 'Exhibits',
  },
);

const CustomTabs = createNavigationContainer(
  createNavigator(CustomTabRouter)(CustomTabView),
);

export default CustomTabs;
