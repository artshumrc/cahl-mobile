import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View, Text } from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Exhibit from './Exhibit.js';

// styles
import styles from './ExhibitsScreenStyles';

class ExhibitsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.navigateToComments = this.navigateToComments.bind(this);
  }

  static navigationOptions = {
    tabBarLabel: 'Exhibits',
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    data: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
      exhibits: PropTypes.object,
    }).isRequired,
  };

  navigateToComments() {
    const { navigate } = this.props.navigation;
    navigate('CommentsScreen');
  }

  render() {
    const { navigation, data: { loading, error, HULItems } } = this.props;

    if (loading) {
      return (
        <Text style={styles.title}>Loading...</Text>
      )
    } else if (error) {
      console.log(error)
      return (
        <Text style={styles.title}>Error</Text>
      )
    } else {
      const totalNumberOfItems = HULItems.pagination.numFound;
      const exhibits = HULItems.items.mods;

      return (
        <ScrollView style={styles.container}>
          <View style={styles.textBox}>
            <Text style={styles.title}>Charlie Archive</Text>
            <Text style={styles.subtitle}>at the Harvard Library</Text>
          </View>
          <View>
            {
              exhibits.map(exhibit =>
                <Exhibit
                  exhibitNumber={exhibits.indexOf(exhibit) + 1}
                  navigation={navigation}
                  key={exhibit.recordInfo.recordIdentifier['#text']}
                  totalNumberOfItems={totalNumberOfItems}
                  imageSource={exhibit.relatedItem.location[0].url[0]['#text']}
                  description={exhibit.subject.topic}
                  recordId={exhibit.recordInfo.recordIdentifier['#text']}
                />
              )
            }
          </View>
        </ScrollView>
      );
    }
  }
}

const getExhibits = gql`
query {
  HULItems {
    pagination,
    items
  }
}
`;

export default graphql(getExhibits)(ExhibitsScreen);
