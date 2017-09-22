import React from 'react';
import { View, ScrollView, Text } from 'react-native';

import Comment from './Comment';

import { CommentsScreenStyles } from './CommentsScreenStyles';

const testComment1 = {
  _id: "hgfygu34573eiurgsdbf",
  name: 'Tyler Kirby',
  text: 'Consectetur culpa amet sint non tempor labore commodo ex in labore in minim officia laborum. Ullamco nulla magna duis dolore incididunt incididunt aute eu aliquip ex aliqua amet magna.',
  date: 'July 26, 2017',
  img: {
    src: '/Users/tyler/Archimedes/cahl-mobile/App/Images/IMG_0487.jpg',
  }
}

const testComment2 = {
  _id: "7238fdjsgfurgsdbf",
  name: 'Tyler Kirby',
  text: 'Minim minim ea consectetur eu deserunt cillum. Consectetur incididunt ad adipisicing nulla aute consequat. Magna reprehenderit ex veniam do esse tempor. Ipsum proident ipsum laborum deserunt nulla enim esse. Proident excepteur tempor anim laborum do aute elit non tempor mollit sunt mollit. Officia irure in qui occaecat est anim commodo anim ut eiusmod adipisicing eu ad est.',
  date: 'July 29, 2017',
  img: {
    src: '/Users/tyler/Archimedes/cahl-mobile/App/Images/IMG_0487.jpg',
  }
}

const testComments = [testComment1, testComment2]

class CommentsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static navigationOptions = {
    title: 'Comments'
  }

  handleSubmit() {

  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={CommentsScreenStyles.container}>
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
        <View>
        </View>
      </ScrollView>
    );
  }
}

export default CommentsScreen;
