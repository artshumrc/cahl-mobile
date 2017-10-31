import React from 'react';
import { View, ScrollView, TextInput, Image, Button } from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import firebase from 'firebase';

import Comment from './Comment';

import styles from './CommentsScreenStyles';

const testComment1 = {
  _id: "hgfygu34573eiurgsdbf",
  name: 'Tyler Kirby',
  text: 'Consectetur culpa amet sint non tempor labore commodo ex in labore in minim officia laborum. Ullamco nulla magna duis dolore incididunt incididunt aute eu aliquip ex aliqua amet magna.',
  date: 'July 26, 2017',
  img: {
    src: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/20799473_1646822218670552_3001965826470328790_n.jpg?oh=1dd91bbffa17aa3b2c6a84b6fd39423a&oe=5AA608F1',
  }
}

const testComment2 = {
  _id: "7238fdjsgfurgsdbf",
  name: 'Tyler Kirby',
  text: 'Minim minim ea consectetur eu deserunt cillum. Consectetur incididunt ad adipisicing nulla aute consequat. Magna reprehenderit ex veniam do esse tempor. Ipsum proident ipsum laborum deserunt nulla enim esse. Proident excepteur tempor anim laborum do aute elit non tempor mollit sunt mollit. Officia irure in qui occaecat est anim commodo anim ut eiusmod adipisicing eu ad est.',
  date: 'July 29, 2017',
  img: {
    src: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/20799473_1646822218670552_3001965826470328790_n.jpg?oh=1dd91bbffa17aa3b2c6a84b6fd39423a&oe=5AA608F1',
  }
}

const testComments = [testComment1, testComment2];

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
    console.log(currentUser);
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            {
              testComments.map(comment =>
                <Comment
                  key={comment._id}
                  comment={comment}
                />
              )
            }
          </View>
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
    displayName,
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
