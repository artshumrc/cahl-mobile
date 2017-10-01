import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, Button } from 'react-native';

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
        <View>
          <Image source={{ uri: story.profileImg }} />
          <View>
            <Text>{story.name}</Text>
            <Text>{story.date}</Text>
          </View>
        </View>
        <View>
          { story.storyImg ? <Image source={{ uri: story.storyImg }} /> : ''}
          <Text>{story.text}</Text>
          <Button
            title={`View ${story.comments.length} ${story.comments.length === 1 ? 'comment.' : 'comments'}`}
            onPress={this.navigateToComments}
          />
        </View>

      </View>
    );
  }
}

export default Story;
