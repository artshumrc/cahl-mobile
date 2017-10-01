import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// styles
import styles from './SearchScreenStyles.js';

class SearchScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      exhibitNumber: '- - -'
    }
  }
  static navigationOptions = {
    tabBarLabel: <Icon name="search" style={styles.tabLabel}/>
  }
  render() {
    const { exhibitNumber } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.instructionText}>Enter an item number</Text>
        <TextInput
          value={exhibitNumber}
          onChange={(exhibitNumber) => this.setState({ exhibitNumber })}
          keyboardType = 'number-pad'
          style={styles.textInput}
          clearTextOnFocus={true}
        />
      </View>
    )
  }
}

export default SearchScreen;
