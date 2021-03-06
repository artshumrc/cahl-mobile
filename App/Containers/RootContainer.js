import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import AppNavigation from '../navigation/AppNavigation';

// Styles
import styles from './RootContainerStyles';

class RootContainer extends Component {
  componentDidMount() {
    // if redux persist is not active fire startup action
  }

  render() {
    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle="dark-content" />
        <AppNavigation />
      </View>
    );
  }
}

// wraps dispatch to create nicer functions to call within our component


export default RootContainer;
