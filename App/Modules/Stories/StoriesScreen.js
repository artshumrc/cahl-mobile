import React from 'react';
import PropTypes from 'prop-types'
import { ScrollView, View, Text, Button, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// styles
import StoriesScreenStyles from './StoriesScreenStyles';

// TODO: Add stories (maybe use comment component for stories without images?)

class StoriesScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      addStory: 'Share your story'
    }

    this.navigateToComments = this.navigateToComments.bind(this);
  }

  static navigationOptions = {
    tabBarLabel: 'Stories',
  }

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  }

  navigateToComments() {
    const { navigate } = this.props.navigation;
    navigate('CommentsScreen');
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
        <View>
          <Button
            title={'View comments'}
            onPress={this.navigateToComments}
          />
        </View>
      </ScrollView>
    );
  }
}

export default StoriesScreen;
