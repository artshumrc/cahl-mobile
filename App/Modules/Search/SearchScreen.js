import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// styles
import SearchScreenStyles from './SearchScreenStyles.js';

class SearchScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: <Icon name="search" style={SearchScreenStyles.tabLabel}/>
  }
  render() {
    return (
      <View>
        <Text>Search Screen</Text>
      </View>
    )
  }
}

export default SearchScreen;
