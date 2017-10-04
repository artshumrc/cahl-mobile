import React from 'react';
import PropTypes from 'prop-types'
import { ScrollView, View, Text, Button, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Story from './Story.js';

// styles
import styles from './StoriesScreenStyles';


const sampleStory1 = {
  _id: 'sdhfjsdfjkjh7634723',
  name: 'Tyler Kirby',
  text: 'Minim minim ea consectetur eu deserunt cillum. Consectetur incididunt ad adipisicing nulla aute consequat. Magna reprehenderit ex veniam do esse tempor. Ipsum proident ipsum laborum deserunt nulla enim esse. Proident excepteur tempor anim laborum do aute elit non tempor mollit sunt mollit. Officia irure in qui occaecat est anim commodo anim ut eiusmod adipisicing eu ad est.',
  profileImg: '/Users/tyler/Archimedes/cahl-mobile/App/images/IMG_0487.jpg',
  storyImg: '/Users/tyler/Archimedes/cahl-mobile/App/images/fabien b 65.png',
  comments: ['1 comment', '2 comment', '3 Comment'],
  date: 'October 1, 2017'
}

const sampleStory2 = {
  _id: 'sdhfjsdfjkj362gf334723',
  name: 'Tyler Kirby',
  text: 'Minim minim ea consectetur eu deserunt cillum. Consectetur incididunt ad adipisicing nulla aute consequat. Magna reprehenderit ex veniam do esse tempor. Ipsum proident ipsum laborum deserunt nulla enim esse. Proident excepteur tempor anim laborum do aute elit non tempor mollit sunt mollit. Officia irure in qui occaecat est anim commodo anim ut eiusmod adipisicing eu ad est.',
  profileImg: '/Users/tyler/Archimedes/cahl-mobile/App/images/IMG_0487.jpg',
  comments: ['1 comment', '2 comment'],
  date: 'October 2, 2017',
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
    const { navigation } = this.props;
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
          { sampleStories.map(story => <Story story={story} navigation={navigation} key={story._id}/>) }
        </View>
      </ScrollView>
    );
  }
}

export default StoriesScreen;
