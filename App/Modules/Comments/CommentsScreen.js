import React from 'react';
import { View, ScrollView, TextInput, Image, Button, Text } from 'react-native';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import firebase from 'firebase';

// components
import Comment from './Comment';


// styles
import styles from './CommentsScreenStyles';

class CommentsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: 'Add your comment.',
      currentUser: firebase.auth().currentUser,
    };

    this.post = this.post.bind(this);
    this.login = this.login.bind(this);
  }

  static navigationOptions = {
    title: 'Comments'
  };

  login() {
    const { navigate } = this.props.navigation;
    navigate('LoginScreen');
  }

  post() {
    const { mutate, navigation } = this.props;
    const { currentUser, content } = this.state;

    alert('Comments are made public upon posting!');

    mutate({
      variables: {
        itemId: navigation.state.params.recordId,
        userDisplayName: currentUser.displayName,
        content: content,
      }
    }).then(({ data }) => console.log('success! ', data))
      .catch(error => console.log(error));
  }

  render() {
    const { content, currentUser } = this.state;
    const { data } = this.props;

    return (
      <View style={styles.container}>
        <ScrollView>
          {
            data.comments && data.comments.length > 0 ?
              <View>
                {
                  data.comments.map(comment =>
                    <Comment
                      key={comment._id}
                      comment={comment}
                    />
                  )
                }
              </View>
              :
              <View>
                <Text>No comments available.</Text>
              </View>
          }
        </ScrollView>
        <View style={styles.textInputContainer}>
          {
            currentUser &&
              <Image
                style={styles.image}
                source={{ uri: currentUser.photoURL }}
              />
          }
          <TextInput
            value={content}
            onChange={(content) => this.setState({ content })}
            style={styles.textInput}
            clearTextOnFocus={true}
          />
          {
            currentUser ?
              <Button
                title={'Post'}
                onPress={this.post}
              />
            :
              <Button
                title={'Sign in'}
                onPress={this.login}
              />
          }
        </View>
      </View>

    );
  }
}

const getComments = gql`
query getComments($itemId: ID!) {
  comments(itemId: $itemId) {
    content,
    createdAt,
    userDisplayName,
  }
}
`;

const addComment = gql`
mutation content($itemId: String!, $userDisplayName: String!, $content: String!) {
  commentCreate(itemId: $itemId, userDisplayName: $userDisplayName, content: $content) {
    content,
    itemId,
    userDisplayName,
    createdAt,
  }
}
`;

export default compose(
  graphql(getComments, {
    options: ownProps => ({
      variables: {
        itemId: ownProps.navigation.state.params.recordId,
      }
    }),
  }),
  graphql(addComment),
)(CommentsScreen);
