import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View, Text } from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import I18n from 'react-native-i18n';

// components
import Exhibit from './Exhibit.js';

// styles
import styles from './ExhibitsScreenStyles';

// translations
import en from '../../i18n/languages/english.json';
import fr from '../../i18n/languages/fr.json';

I18n.translations = {
  en,
  fr,
};

class ExhibitsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.navigateToComments = this.navigateToComments.bind(this);
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
        <Text style={styles.title}>{I18n.t('loading')}</Text>
      )
    } else if (error) {
      console.log(error);
      return (
        <Text style={styles.title}>{I18n.t('error')}</Text>
      )
    } else {
      const totalNumberOfItems = HULItems.pagination.numFound;
      const exhibits = HULItems.items.mods;

      return (
        <ScrollView style={styles.container}>
          <View style={styles.textBox}>
            <Text style={styles.title}>{I18n.t('charlieArchive')}</Text>
            <Text style={styles.subtitle}>{I18n.t('atHUL')}</Text>
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
