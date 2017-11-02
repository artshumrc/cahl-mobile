import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';

// styles
import styles from './CommentStyles';

const Comment = ({ content, displayName, createdAt, photoURL }) => (
  <View style={styles.commentContainer}>
    <Image style={styles.image} source={{ uri: photoURL }} />
    <View>
      <View style={styles.commentText}>
        <Text>
          <Text style={styles.name}>{`${displayName}  `}</Text>
          <Text style={styles.text}>{content}</Text>
        </Text>
      </View>
      <Text style={styles.date}>{createdAt}</Text>
    </View>
  </View>
);

Comment.propTypes = {
  content: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  photoURL: PropTypes.string.isRequired,
};

export default Comment;
