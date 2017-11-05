import React from 'react';
import PropTypes from 'prop-types'
import { ScrollView, View, Text, Button, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

import Story from './Story.js';

// styles
import styles from './StoriesScreenStyles';

class StoriesScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      addStory: 'Share your story'
    }
  }

  static navigationOptions = {
    tabBarLabel: 'Stories',
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  render() {
    const { addStory } = this.state;
    const { navigation, data} = this.props;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.questionText}>What was your personal react to the shootings and media coverage that followed?</Text>
          <View style={styles.submitStory}>
            <TextInput
              value={addStory}
              onChange={(addStory) => this.setState({ addStory })}
              style={styles.textInput}
              clearTextOnFocus={true}
            />
            <TouchableOpacity>
              <Icon name="plus" style={styles.submitIcon} />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          {
            data.stories && data.stories.map(story =>
              <Story
                navigation={navigation}
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

const getStories = gql`
query getStories {
  stories {
    content,
    userID,
    userDisplayName,
    userProfilePhotoURL,
    createdAt,
    photoURL
  }
}
`;

export default compose(graphql(getStories))(StoriesScreen);
