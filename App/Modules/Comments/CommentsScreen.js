import React from 'react';
import { View, ScrollView, Text } from 'react-native';

class CommentsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {

  }

  render() {
    return (
      <ScrollView>
        <View />
        <View />
      </ScrollView>
    );
  }
}

export default CommentsScreen;
