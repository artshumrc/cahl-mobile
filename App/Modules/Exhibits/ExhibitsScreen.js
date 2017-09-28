import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View, Text, Button } from 'react-native';

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
      <ScrollView>
        <View>
          <Text>Exhibits view</Text>
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

export default ExhibitsScreen;
