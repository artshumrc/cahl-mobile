import React from 'react';
import PropTypes from 'prop-types'
import { ScrollView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import firebase from 'firebase';
import I18n from 'react-native-i18n';

// components
import Story from './Story.js';

// styles
import styles from './StoriesScreenStyles';

// translations
import en from '../../i18n/languages/english';
import fr from '../../i18n/languages/fr.json';

I18n.translations = {
  en,
  fr,
};

class StoriesScreen extends React.Component {
  constructor(props) {
    super(props);

    this.shareStory = this.shareStory.bind(this);
  }

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  shareStory() {
    this.props.navigation.navigate('ShareStory')
  }

  render() {
    const { navigation, data, data: { loading, error, stories } } = this.props;

    if (error) {
      console.log(error);
      return (
        <Text style={styles.title}>{`${I18n.t('error')} ${error.message}`}</Text>
      )
    } else if (loading) {
      return (
        <Text style={styles.title}>{I18n.t('loading')}</Text>
      )
    } else {
      return (
        <ScrollView style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.questionText}>{I18n.t('storiesMessage')}</Text>
            <View style={styles.submitStory}>
              <Text>{I18n.t('shareStory')}</Text>
              <TouchableOpacity onPress={this.shareStory}>
                <Icon name="plus" style={styles.submitIcon} />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            {
              stories && stories.map(story =>
                <Story
                  navigation={navigation}
                  itemId={story._id}
                  key={story._id}
                  content={story.content}
                  userIsOwner={story.userIsOwner}
                  userDisplayName={story.userDisplayName}
                  userPhotoURL={story.userPhotoURL}
                  createdAt={story.createdAt}
                  photoURL={story.photoURL}
                  refetch={data.refetch}
                />
              )
            }
          </View>
        </ScrollView>
      );
    }
  }
}

const getStories = gql`
query getStories {
  stories {
    content,
    userDisplayName,
    userProfilePhotoURL,
    createdAt,
    photoURL,
    _id,
    userIsOwner
  }
}
`;


export default graphql(getStories)(StoriesScreen);
