import React from 'react';
import { View, ScrollView, Text, TextInput, Image, Button } from 'react-native';

import Comment from './Comment';

import styles from './CommentsScreenStyles';

const testComment1 = {
  _id: "hgfygu34573eiurgsdbf",
  name: 'Tyler Kirby',
  text: 'Consectetur culpa amet sint non tempor labore commodo ex in labore in minim officia laborum. Ullamco nulla magna duis dolore incididunt incididunt aute eu aliquip ex aliqua amet magna.',
  date: 'July 26, 2017',
  img: {
    src: 'https://ids.lib.harvard.edu/ids/view/423164986',
  }
}

const testComment2 = {
  _id: "7238fdjsgfurgsdbf",
  name: 'Tyler Kirby',
  text: 'Minim minim ea consectetur eu deserunt cillum. Consectetur incididunt ad adipisicing nulla aute consequat. Magna reprehenderit ex veniam do esse tempor. Ipsum proident ipsum laborum deserunt nulla enim esse. Proident excepteur tempor anim laborum do aute elit non tempor mollit sunt mollit. Officia irure in qui occaecat est anim commodo anim ut eiusmod adipisicing eu ad est.',
  date: 'July 29, 2017',
  img: {
    src: 'https://ids.lib.harvard.edu/ids/view/423164986',
  }
}

const testComments = [testComment1, testComment2]

class CommentsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      addComment: 'Add your comment.',
      loggedIn: false,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.login = this.login.bind(this);
  }

  static navigationOptions = {
    title: 'Comments'
  }

  handleSubmit() {

  }

  login() {
    const { navigate } = this.props.navigation;
    navigate('LoginScreen');
  }

  render() {
    const { addComment, loggedIn } = this.state;
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
          <Image
              style={styles.image}
              source={{ uri: testComment1.img.src }}
          />
          <TextInput
            value={addComment}
            onChange={(addComment) => this.setState({ addComment })}
            style={styles.textInput}
            clearTextOnFocus={true}
          />
          <Button
            title={'Sign in'}
            onPress={this.login}
          />
        </View>
      </View>

    );
  }
}

export default CommentsScreen;
