import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';

// styles
import ExhibitsScreenStyles from './ExhibitsScreenStyles';

const sampleDescription = "A brief description might accompany the piece to describe it's meaning. If it is longer than three lines, the description would fold fold fold fold fold fold fold fold fold fold fold fold";
const sampleLocation = "01/262"

class ExhibitsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.navigateToComments = this.navigateToComments.bind(this);
  }

  static navigationOptions = {
    tabBarLabel: 'Exhibits',
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
    return (
      <ScrollView style={ExhibitsScreenStyles.container}>
        <View style={ExhibitsScreenStyles.textBox}>
          <Text style={ExhibitsScreenStyles.title}>Charlie Archive</Text>
          <Text style={ExhibitsScreenStyles.subtitle}>at the Harvard Library</Text>
        </View>
        <View>
          <Text style={ExhibitsScreenStyles.exhibitNumber}>{sampleLocation}</Text>
          <Image
            style={ExhibitsScreenStyles.exhibitImage}
            source={{ uri: '/Users/tyler/Archimedes/cahl-mobile/App/Images/#JeSuisCharlie.png' }}
          />
          <Text>
            <Text
              style={ExhibitsScreenStyles.exhibitDescription}
              numberOfLines={3}
            >
              {sampleDescription}
            </Text>
            <Text
              style={ExhibitsScreenStyles.showMoreText}
              onPress={this.navigateToComments}
            >
              {`  More`}
            </Text>
          </Text>
          <TouchableOpacity
            onPress={this.navigateToComments}
            style={ExhibitsScreenStyles.commentsButton}
          >
            <Text style={ExhibitsScreenStyles.commentsButtonText}>View 2 comments</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

export default ExhibitsScreen;
