import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo'


// styles
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
  };

  navigateToComments() {
    const { recordId }= this.props;
    const { navigate } = this.props.navigation;
    navigate('CommentsScreen', { recordId });
  }

  render() {
    const { totalNumberOfItems, exhibitNumber, imageSource, description, data: { comments } } = this.props;
    return (
      <View>
        <Text style={styles.number}>{`${exhibitNumber}/${totalNumberOfItems}`}</Text>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image style={styles.image} resizeMode="contain" source={{ uri: imageSource }} />
        </View>
        <Text style={styles.description}>{description}</Text>
        <TouchableOpacity
          onPress={this.navigateToComments}
          style={styles.commentsButton}
        >
          <Text style={styles.commentsButtonText}>
            {
              comments && comments.length > 0 ?
                `View ${comments.length} comments`
                :
                'Add a Comment'
            }
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const getComments = gql`
query getComments($itemId: ID!) {
  comments(itemId: $itemId) {
    _id
  }
}
`;

export default graphql(getComments, {
  options: ownProps => ({
    variables: {
      itemId: ownProps.recordId
    }
  })
})(Exhibit);
