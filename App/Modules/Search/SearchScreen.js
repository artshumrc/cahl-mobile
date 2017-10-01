import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class SearchScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: <Icon name="search"/>
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
