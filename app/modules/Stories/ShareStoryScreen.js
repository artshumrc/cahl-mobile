import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import firebase from 'firebase';
import I18n from 'react-native-i18n';
import Icon from 'react-native-vector-icons/FontAwesome';

// styles
import styles from './ShareStoryScreenStyles';

// translations
import en from '../../i18n/languages/english';
import fr from '../../i18n/languages/fr.json';

I18n.translations = {
  en,
  fr,
};

class ShareStory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: firebase.auth().currentUser,
      content: '',
      photoURL: '',
    };

    this.post = this.post.bind(this);
  }

  post() {

  }

  render() {
    const { content } = this.state;
    return (
      <View>
        <View>
          <TextInput
            placeholder="Share your story."
            onChangeText={content => this.setState({ content })}
            autoFocus
            multiline
            keyboardType="default"
          />
        </View>
        <View>
          <TouchableOpacity>
            <Text>Inlcude an image</Text>
            <Icon name="photo" style={styles.submitIcon} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default ShareStory;
