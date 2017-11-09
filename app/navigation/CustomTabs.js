import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import {
  createNavigator,
  createNavigationContainer,
  TabRouter,
  addNavigationHelpers,
} from 'react-navigation';

// components
import CustomTabBar from './CustomTabBar';

// views
import ExhibitsScreen from '../modules/Exhibits';
import StoriesScreen from '../modules/Stories';
import SearchScreen from '../modules/Search';

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
