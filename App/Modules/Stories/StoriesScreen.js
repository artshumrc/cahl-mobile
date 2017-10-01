import React from 'react';
import PropTypes from 'prop-types'
import { ScrollView, View, Text, Button, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// styles
import { StoriesScreenStyles } from './StoriesScreenStyles';

// TODO: Add stories (maybe use comment component for stories without images?)

const sampleStory1 = {
  _id: 'sdhfjsdfjkjh7634723',
  name: 'Tyler Kirby',
  text: 'Minim minim ea consectetur eu deserunt cillum. Consectetur incididunt ad adipisicing nulla aute consequat. Magna reprehenderit ex veniam do esse tempor. Ipsum proident ipsum laborum deserunt nulla enim esse. Proident excepteur tempor anim laborum do aute elit non tempor mollit sunt mollit. Officia irure in qui occaecat est anim commodo anim ut eiusmod adipisicing eu ad est.',
  profileImg: '/Users/tyler/Archimedes/cahl-mobile/App/Images/IMG_0487.jpg',
  storyImg: '/Users/tyler/Archimedes/cahl-mobile/App/Images/fabien b 65.png',
  comments: ['1 comment', '2 comment', '3 Comment']
}

const sampleStory2 = {
  _id: 'sdhfjsdfjkjh7634723',
  name: 'Tyler Kirby',
  text: 'Minim minim ea consectetur eu deserunt cillum. Consectetur incididunt ad adipisicing nulla aute consequat. Magna reprehenderit ex veniam do esse tempor. Ipsum proident ipsum laborum deserunt nulla enim esse. Proident excepteur tempor anim laborum do aute elit non tempor mollit sunt mollit. Officia irure in qui occaecat est anim commodo anim ut eiusmod adipisicing eu ad est.',
  profileImg: '/Users/tyler/Archimedes/cahl-mobile/App/Images/IMG_0487.jpg',
  comments: ['1 comment', '2 comment']
}

const sampleStories = [sampleStory1, sampleStory2]

class StoriesScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      addStory: 'Share your story'
    }
  }

  static navigationOptions = {
    tabBarLabel: 'Stories',
  }

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  }

  render() {
    const { addStory } = this.state;
    return (
      <ScrollView style={StoriesScreenStyles.container}>
        <View>
          <Text style={StoriesScreenStyles.questionText}>What was your personal react to the shootings and media coverage that followed?</Text>
          <View style={StoriesScreenStyles.submitStory}>
            <TextInput
              value={addStory}
              onChange={(addStory) => this.setState({ addStory })}
              style={StoriesScreenStyles.textInput}
              clearTextOnFocus={true}
            />
            <TouchableOpacity>
              <Icon name="plus" style={StoriesScreenStyles.submitIcon} />
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    );
  }
}

export default StoriesScreen;
