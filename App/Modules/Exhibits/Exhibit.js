import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import I18n from 'react-native-i18n';

// styles
import styles from './ExhibitStyles.js';

// translations
import en from '../../i18n/languages/english.json';
import fr from '../../i18n/languages/fr.json';

I18n.translations = {
  en,
  fr,
};

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
    navigate('CommentsScreen', { itemId: recordId, itemType: 'exhibit' });
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
                `${I18n.t('view')} ${comments.length} ${I18n.t('comments')}`
                :
                I18n.t('addComment')
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
