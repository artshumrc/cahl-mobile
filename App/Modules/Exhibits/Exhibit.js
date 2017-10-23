import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './ExhibitStyles.js';

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
    const { totalNumberOfItems, exhibitNumber, imageSource, description } = this.props;

    console.log(this.props.imageSource)

    return (
      <View>
        <Text style={styles.number}>{`${exhibitNumber}/${totalNumberOfItems}`}</Text>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image style={styles.image} resizeMode="contain" source={{ uri: imageSource }} />
        </View>
        <Text>
          <Text style={styles.description}>{description}</Text>
          <Text
            style={styles.showMoreText}
            onPress={this.navigateToComments}
          >
            {`  More`}
          </Text>
        </Text>
        <TouchableOpacity
          onPress={this.navigateToComments}
          style={styles.commentsButton}
        >
          <Text style={styles.commentsButtonText}>View 2 comments</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Exhibit;
