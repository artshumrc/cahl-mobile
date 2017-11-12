import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, Button, TouchableOpacity } from 'react-native';
import moment from 'moment';

// styles
import styles from './StoryStyles';

class Story extends React.Component {
  constructor(props) {
    super(props);

    this.navigateToComments = this.navigateToComments.bind(this);
  }

  static propTypes = {
    content: PropTypes.string.isRequired,
    userID: PropTypes.string.isRequired,
    userDisplayName: PropTypes.string.isRequired,
    userPhotoURL: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    photoURL: PropTypes.string.isRequired,
    commentId: PropTypes.string.isRequired,
  };

  navigateToComments() {
    const { navigate } = this.props.navigation;
    const { itemId } = this.props;
    navigate('CommentsScreen', { itemId, itemType: 'story' });
  }

  render() {
    const { content, userID, userDisplayName, userPhotoURL, createdAt, photoURL} = this.props;
    return (
      <View style={styles.storyContainer}>
        <View style={styles.headerContainer}>
          <Image style={styles.profileImage} source={{ uri: userPhotoURL }} />
          <View>
            <Text style={styles.nameText}>{userDisplayName}</Text>
            <Text style={styles.dateText}>{moment(Date(createdAt)).format("D MMMM YYYY")}</Text>
          </View>
        </View>
        <View>
          { photoURL ? <Image style={styles.storyImage} source={{ uri: photoURL }} /> : <View />}
          <Text style={styles.storyText}>{content}</Text>
          <TouchableOpacity
            onPress={this.navigateToComments}
            style={styles.commentsButton}
          >
            <Text style={styles.commentsButtonText}>{`View 2 comments`}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Story;
