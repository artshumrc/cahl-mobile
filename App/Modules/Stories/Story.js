import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, Button, TouchableOpacity } from 'react-native';

// styles
import styles from './StoryStyles';

// TODO: name and text should be together
// TODO: test for overflow
// TODO: add bottom border to story text

class Story extends React.Component {
  constructor(props) {
    super(props);

    this.navigateToComments = this.navigateToComments.bind(this);
  }


  static propTypes = {
    story: PropTypes.shape({
      img: PropTypes.shape({
        src: PropTypes.string,
      }),
      name: PropTypes.string,
      date: PropTypes.string,
      text: PropTypes.string,
    }).isRequired,
  }

  navigateToComments() {
    const { navigate } = this.props.navigation;
    navigate('CommentsScreen');
  }

  render() {
    const { story } = this.props;
    return (
      <View style={styles.storyContainer}>
        <View style={styles.headerContainer}>
          <Image style={styles.profileImage} source={{ uri: story.profileImg }} />
          <View>
            <Text style={styles.nameText}>{story.name}</Text>
            <Text style={styles.dateText}>{story.date}</Text>
          </View>
        </View>
        <View>
          { story.storyImg ? <Image style={styles.storyImage} source={{ uri: story.storyImg }} /> : <View />}
          <Text style={styles.storyText}>{story.text}</Text>
          <TouchableOpacity
            onPress={this.navigateToComments}
            style={styles.commentsButton}
          >
            <Text style={styles.commentsButtonText}>{`View ${story.comments.length} comments`}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Story;
