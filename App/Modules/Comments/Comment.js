import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';

// styles
import styles from './CommentStyles';

// TODO: name and text should be together
// TODO: test for overflow
// TODO: add bottom border to comment text

const Comment = ({ comment }) => (
  <View style={styles.commentContainer}>
    <Image style={styles.image} source={{ uri: comment.img.src }} />
    <View>
      <View style={styles.commentText}>
        <Text>
          <Text style={styles.name}>{`${comment.name}  `}</Text>
          <Text style={styles.text}>{comment.text}</Text>
        </Text>
      </View>
      <Text style={styles.date}>{comment.date}</Text>
    </View>
  </View>
);

Comment.propTypes = {
  comment: PropTypes.shape({
    img: PropTypes.shape({
      src: PropTypes.string,
    }),
    name: PropTypes.string,
    date: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
};

export default Comment;
