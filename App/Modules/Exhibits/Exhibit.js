import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { ExhibitStyles } from './ExhibitsScreenStyles.js';

class Exhibit extends React.Component {
  constructor(props) {
    super(props);

    this.navigateToComments = this.navigateToComments.bind(this);
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
    const { exhibit } = this.props;
    return (
      <View>
        <Text style={ExhibitStyles.number}>{`${exhibit.number}/265`}</Text>
        <Image style={ExhibitStyles.image} source={{ uri: exhibit.imageSource }} />
        <Text>
          <Text style={ExhibitStyles.description}>{exhibit.description}</Text>
          <Text
            style={ExhibitStyles.showMoreText}
            onPress={this.navigateToComments}
          >
            {`  More`}
          </Text>
        </Text>
        <TouchableOpacity
          onPress={this.navigateToComments}
          style={ExhibitStyles.commentsButton}
        >
          <Text style={ExhibitStyles.commentsButtonText}>View 2 comments</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Exhibit;
