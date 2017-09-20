import React from 'react';
import { View, Text, Image } from 'react-native';

// styles
import { CommentStyles } from './CommentsScreenStyles';

// TODO: name and text should be together
// TODO: test for overflow

const Comment = ({ comment }) => (
  <View style={CommentStyles.container}>
    <Image style={CommentStyles.image} source={{uri: comment.img.src}} />
    <View>
      <View style={CommentStyles.commentText}>
        <Text style={CommentStyles.name}>{`${comment.name}  `}</Text>
        <Text style={CommentStyles.text}>{comment.text}</Text>
      </View>
      <Text style={CommentStyles.date}>{comment.date}</Text>
    </View>
  </View>
);

export default Comment;
