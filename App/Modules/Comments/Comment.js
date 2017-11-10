import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import moment from 'moment';
import I18n from 'react-native-i18n';

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

  removeComment() {

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
            <Text style={styles.date}>{moment(Date(createdAt)).format('D MMMM YYYY')}</Text>
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
    )
  }
}

Comment.propTypes = {
  content: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  photoURL: PropTypes.string.isRequired,
  userIsOwner: PropTypes.bool.isRequired,
};

export default Comment;
