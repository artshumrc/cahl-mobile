import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, Button, TouchableOpacity } from 'react-native';
import moment from 'moment';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import I18n from 'react-native-i18n';

// styles
import styles from './StoryStyles';

// translations
import en from '../../i18n/languages/english.json';
import fr from '../../i18n/languages/fr.json';

I18n.translations = {
  en,
  fr,
};

class Story extends React.Component {
  constructor(props) {
    super(props);

    this.navigateToComments = this.navigateToComments.bind(this);
    this.removeStory = this.removeStory.bind(this);
  }

  static propTypes = {
    content: PropTypes.string.isRequired,
    userDisplayName: PropTypes.string.isRequired,
    userPhotoURL: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    photoURL: PropTypes.string.isRequired,
    itemId: PropTypes.string.isRequired,
  };

  navigateToComments() {
    const { navigate } = this.props.navigation;
    const { itemId } = this.props;
    navigate('CommentsScreen', { itemId, itemType: 'story' });
  }

  removeStory() {
    const { mutate, itemId, refetch, data } = this.props;

    mutate({
      variables: {
        storyId: itemId
      },
    }).catch(error => console.log(error));
  }

  render() {
    const { content, userID, userDisplayName, userPhotoURL, createdAt, photoURL, userIsOwner, data: { loading, comments } } = this.props;
    if (loading) {
      return (
        <View>
          <Text>{I18n.t('loading')}</Text>
        </View>
      )
    } else {
      console.log(comments.length)
      return (
        <View style={styles.storyContainer}>
          <View style={styles.headerContainer}>
            <Image style={styles.profileImage} source={{ uri: userPhotoURL }} />
            <View>
              <Text style={styles.nameText}>{userDisplayName}</Text>
              <Text style={styles.dateText}>{moment(createdAt).format("D MMMM YYYY")}</Text>
            </View>
          </View>
          <View>
            { photoURL ? <Image style={styles.storyImage} source={{ uri: photoURL }} /> : <View />}
            <Text style={styles.storyText}>{content}</Text>
            <TouchableOpacity
              onPress={this.navigateToComments}
              style={styles.commentsButton}
            >
              <Text style={styles.commentsButtonText}>
              {
                comments && comments.length > 0 ?
                  `${I18n.t('view')} ${comments.length} ${I18n.t('comments')}`
                  :
                  I18n.t('addComment')
              }
              </Text>
            </TouchableOpacity>
            {
              userIsOwner
              &&
              <TouchableOpacity
                onPress={this.removeStory}
                style={styles.removeButton}
              >
                <Text style={styles.removeButtonText}>{I18n.t('removeStory')}</Text>
              </TouchableOpacity>
            }
          </View>
        </View>
      );
    }
  }
}

const getComments = gql`
query getComments($itemId: ID!) {
  comments(itemId: $itemId) {
    _id
  }
}
`;

const removeComment = gql`
mutation storyRemove($storyId: String!) {
  storyRemove(storyId: $storyId) {
    _id
  }
}
`;

export default compose(
  graphql(getComments, {
    options: ownProps => ({
      variables: {
        itemId: ownProps.itemId
      }
    }),
  }),
  graphql(removeComment),
)(Story);
