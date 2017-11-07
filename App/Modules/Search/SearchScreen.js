import React from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import I18n from 'react-native-i18n';

// styles
import styles from './SearchScreenStyles.js';

// translations
import en from '../../i18n/languages/english.json';
import fr from '../../i18n/languages/fr.json';

I18n.translations = {
  en,
  fr,
};

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
        <Text style={styles.instructionText}>{I18n.t('searchItem')}</Text>
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
          <Text style={buttonTextStyle}>{I18n.t('viewItem')}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default SearchScreen;
