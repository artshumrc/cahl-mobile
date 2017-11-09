import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import Flag from 'react-native-flags';
import Icon from 'react-native-vector-icons/FontAwesome';
import I18n from 'react-native-i18n';

// styles
import styles from './CustomTabsStyles';

// translations
import en from '../i18n/languages/english';
import fr from '../i18n/languages/fr.json';

I18n.translations = {
  en,
  fr,
};

const CustomTabBar = ({ locale, toggleLocale, navigation }) => (
  <View style={styles.container}>
    <View style={styles.leftContainer}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Exhibits')}
        style={styles.exhibitsLabel}
      >
        <Text style={styles.labelText}>{I18n.t('exhibits')}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Stories')}
        style={styles.storiesLabel}
      >
        <Text style={styles.labelText}>{I18n.t('stories')}</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.rightContainer}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Search')}
        style={styles.searchLabel}
      >
        <Icon name="search" style={styles.labelText}/>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={toggleLocale}
        style={styles.languageLabel}
      >
        {
          locale === 'en' ?
            <Flag code="GB" size={24} type="shiny"/>
            :
            <Flag code="FR" size={24} type="shiny"/>
        }
      </TouchableOpacity>
    </View>
  </View>
);

CustomTabBar.propTypes = {
  locale: PropTypes.string.isRequired,
  toggleLocale: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default CustomTabBar;
