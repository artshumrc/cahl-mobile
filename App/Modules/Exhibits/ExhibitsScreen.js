import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Exhibit from './Exhibit.js';

// styles
import styles from './ExhibitsScreenStyles';

const sampleExhibit = {
  _id: '762379bfgfgf4gf',
  description: "A brief description might accompany the piece to describe it's meaning. If it is longer than three lines, the description would fold fold fold fold fold fold fold fold fold fold fold fold",
  number: 1,
  imageSource: "/Users/tyler/Archimedes/cahl-mobile/App/images/#JeSuisCharlie.png",
  comments: ['ajshf', 'djfhjsd']
}

const sampleExhibits = [sampleExhibit]

class ExhibitsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.navigateToComments = this.navigateToComments.bind(this);
  }

  static navigationOptions = {
    tabBarLabel: 'Exhibits',
  }

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    data: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
      exhibits: PropTypes.object,
    }).isRequired,
  }

  navigateToComments() {
    const { navigate } = this.props.navigation;
    navigate('CommentsScreen');
  }

  render() {
    const { navigation } = this.props;
    console.log(this.props);
    return (
      <ScrollView style={styles.container}>
        <View style={styles.textBox}>
          <Text style={styles.title}>Charlie Archive</Text>
          <Text style={styles.subtitle}>at the Harvard Library</Text>
        </View>
        <View>
          { sampleExhibits.map(exhibit => <Exhibit exhibit={exhibit} navigation={navigation} key={exhibit._id}/>) }
        </View>
      </ScrollView>
    );
  }
}

const getExhibits = gql`
  query HULItems {
    HULItems {
      pagination,
      items
    }
  }
`

export default graphql(getExhibits)(ExhibitsScreen);
