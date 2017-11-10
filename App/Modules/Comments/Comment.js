import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import moment from 'moment';
import I18n from 'react-native-i18n';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

// styles
import styles from './CommentStyles';

// translations
import en from '../../i18n/languages/english.json';
import fr from '../../i18n/languages/fr.json';

I18n.translations = {
  en,
  fr,
};

class Comment extends React.Component {
  constructor(props) {
    super(props);

    this.removeComment = this.removeComment.bind(this);
  }

  static propTypes = {
    content: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    photoURL: PropTypes.string.isRequired,
    userIsOwner: PropTypes.bool.isRequired,
    mutate: PropTypes.func.isRequired,
    commentId: PropTypes.string.isRequired,
    refecth: PropTypes.func.isRequired,
  }

  removeComment() {
    const { mutate, commentId, refetch } = this.props;

    mutate({
      variables: {
        commentId,
      },
    }).then(({ data }) => console.log('removed comment successfully', data))
      .catch(error => console.log(error));

    refetch();
  }

  render() {
    const { content, displayName, createdAt, photoURL, userIsOwner } = this.props;
    return (
      <View style={styles.commentContainer}>
        <Image style={styles.image} source={{ uri: photoURL }} />
        <View>
          <View style={styles.commentText}>
            <Text>
              <Text style={styles.name}>{`${displayName}  `}</Text>
              <Text style={styles.text}>{content}</Text>
            </Text>
          </View>
          <View>
            <Text style={styles.date}>{moment(createdAt).format('D MMMM YYYY')}</Text>
            {
              userIsOwner
              &&
              <TouchableOpacity onPress={this.removeComment}>
                <Text style={styles.removeButtonText}>{I18n.t('removeComment')}</Text>
              </TouchableOpacity>
            }
          </View>
        </View>
      </View>
    );
  }
}

const removeComment = gql`
mutation removeComment($commentId: String!) {
  commentRemove(commentId: $commentId) {
    _id
  }
}
`;

export default graphql(removeComment)(Comment);
