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

    this.state = {
      content: 'Share your story',
      currentUser: firebase.auth().currentUser,
      photoURL: ''
    };

    this.post = this.post.bind(this);
  }

  static navigationOptions = {
    tabBarLabel: 'Stories',
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  post() {
    const { data, mutate, navigation: { navigate } } = this.props;
    const { currentUser, content, photoURL } = this.state;

    if (currentUser !== undefined) {
      alert(I18n.t('publicStories'));
      mutate({
        variables: {
          content: content,
          userDisplayName: currentUser.displayName,
          userProfilePhotoURL: currentUser.photoURL,
          photoURL: photoURL
        }
      }).then(({ data }) => console.log('successfully added story ', data))
        .catch(error => console.log('error when adding story ', error));
      data.refetch();
    } else {
      navigate('LoginScreen');
    }
  }

  render() {
    const { navigation, data, data: { loading, error, stories } } = this.props;
    const { addStory } = this.state;

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
              <TextInput
                value={addStory}
                onChangeText={content => this.setState({ content })}
                style={styles.textInput}
                clearTextOnFocus={true}
              />
              <TouchableOpacity onPress={this.post}>
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
                  userID={story.userID}
                  userDisplayName={story.userDisplayName}
                  userPhotoURL={story.userPhotoURL}
                  createdAt={story.createdAt}
                  photoURL={story.photoURL}
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
    _id
  }
}
`;

const addStory = gql`
mutation addStory($content: String!, $userDisplayName: String!, $userProfilePhotoURL: String!, $photoURL: String) {
  storyCreate(content: $content, userDisplayName: $userDisplayName, userProfilePhotoURL: $userProfilePhotoURL, photoURL: $photoURL) {
    content,
    userDisplayName,
    userProfilePhotoURL,
    createdAt,
    photoURL
  }
}
`;

export default compose(graphql(getStories), graphql(addStory))(StoriesScreen);
