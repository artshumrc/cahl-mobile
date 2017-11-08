import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import Flag from 'react-native-flags';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  createNavigator,
  createNavigationContainer,
  TabRouter,
  addNavigationHelpers,
} from 'react-navigation';
import I18n from 'react-native-i18n';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions/index';

// views
import ExhibitsScreen from '../modules/Exhibits';
import StoriesScreen from '../modules/Stories';
import SearchScreen from '../modules/Search';

// styles
import styles from './CustomTabsStyles';

// translations
import en from '../i18n/languages/english';
import fr from '../i18n/languages/fr.json';

I18n.translations = {
  en,
  fr,
};

class CustomTabBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      locale: 'en',
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
    const { locale } = this.state;
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Exhibits')}
            style={styles.exhibitsLabel}
          >
            <Text style={styles.labelText}>{I18n.t('exhibits')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Stories')}
            style={styles.storiesLabel}
          >
            <Text style={styles.labelText}>{I18n.t('stories')}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rightContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Search')}
            style={styles.searchLabel}
          >
            <Icon name="search" style={styles.labelText}/>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.toggleLocale}
            style={styles.languageLabel}
          >
            {
              locale === 'en' ?
                <Flag code="GB" size={24} type="shiny"/>
                :
                <Flag code="FR" size={24} type="shiny"/>
            }
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    localeState: state.locale,
  };
}

connect(mapStateToProps, mapDispatchToProps)(CustomTabBar);


const CustomTabView = ({ router, navigation }) => {
  const { routes, index } = navigation.state;
  const ActiveScreen = router.getComponentForRouteName(routes[index].routeName);
  return (
    <View>
      <CustomTabBar navigation={navigation} />
      <ActiveScreen
        navigation={addNavigationHelpers({
          ...navigation,
          state: routes[index],
        })}
      />
    </View>
  );
};

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
