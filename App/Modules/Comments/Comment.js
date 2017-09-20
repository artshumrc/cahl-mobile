import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';

// styles
import { CommentStyles } from './CommentsScreenStyles';

// TODO: name and text should be together
// TODO: test for overflow

const Comment = ({ comment }) => (
  <View style={CommentStyles.container}>
    <Image style={CommentStyles.image} source={{ uri: comment.img.src }} />
    <View>
      <View style={CommentStyles.commentText}>
        <Text style={CommentStyles.name}>{`${comment.name}  `}</Text>
        <Text style={CommentStyles.text}>{comment.text}</Text>
      </View>
      <Text style={CommentStyles.date}>{comment.date}</Text>
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
