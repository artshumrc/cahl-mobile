import React from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity } from 'react-native';


// styles
import styles from './SearchScreenStyles.js';

class SearchScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      exhibitNumber: '',
    };
  }

  handleSubmit() {
    if (this.state.exhibitNumber != '') {
      console.log('Looking up exhibit #', this.state.exhibitNumber);
    } else {
      console.log('Enter an exhibit number');
    }
  }

  render() {
    const { exhibitNumber } = this.state;
    const buttonStyle = exhibitNumber !== '' ? styles.button : styles.buttonNotReady;
    const buttonTextStyle = exhibitNumber !== '' ? styles.buttonText : styles.buttonTextNotReady;
    return (
      <View style={styles.container}>
        <Text style={styles.instructionText}>Enter an item number</Text>
        <TextInput
          value={exhibitNumber}
          onChange={exhibitNumber => this.setState({ exhibitNumber })}
          keyboardType="numeric"
          style={styles.textInput}
          autoFocus
          textAlign={'center'}
          returnKeyType="search"
          maxLength={3}
        />
        <TouchableOpacity
          style={buttonStyle}
          onPress={() => this.handleSubmit}
        >
          <Text style={buttonTextStyle}>View Item</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default SearchScreen;
