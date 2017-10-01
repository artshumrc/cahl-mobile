import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, Button, TouchableOpacity } from 'react-native';

// styles
import { StoryStyles } from './StoriesScreenStyles';

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
      <View style={StoryStyles.storyContainer}>
        <View style={StoryStyles.headerContainer}>
          <Image style={StoryStyles.profileImage} source={{ uri: story.profileImg }} />
          <View>
            <Text style={StoryStyles.nameText}>{story.name}</Text>
            <Text style={StoryStyles.dateText}>{story.date}</Text>
          </View>
        </View>
        <View>
          { story.storyImg ? <Image style={StoryStyles.storyImage} source={{ uri: story.storyImg }} /> : <View />}
          <Text style={StoryStyles.storyText}>{story.text}</Text>
          <TouchableOpacity
            onPress={this.navigateToComments}
            style={StoryStyles.commentsButton}
          >
            <Text style={StoryStyles.commentsButtonText}>{`View ${story.comments.length} comments`}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Story;
