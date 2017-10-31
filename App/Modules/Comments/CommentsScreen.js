import React from 'react';
import { View, ScrollView, TextInput, Image, Button, Text } from 'react-native';
import { graphql } from 'react-apollo';
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
      addComment: 'Add your comment.',
      currentUser: firebase.auth().currentUser,
    };

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
    console.log('success!');
    alert('Comments are made public upon posting!');
  }

  render() {
    const { addComment, currentUser } = this.state;
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
            value={addComment}
            onChange={(addComment) => this.setState({ addComment })}
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
query getComments($itemId: String!) {
  comments(itemId: $itemId) {
    content,
    createdAt,
    userDisplayName,
    photoURL
  }
}
`;

export default graphql(getComments, {
  options: ownProps => ({
    variables: {
      itemId: ownProps.navigation.state.params.recordId,
    }
  })
})(CommentsScreen);
