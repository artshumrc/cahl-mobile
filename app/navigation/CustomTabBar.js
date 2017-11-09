import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Flag from 'react-native-flags';
import Icon from 'react-native-vector-icons/FontAwesome';
import I18n from 'react-native-i18n';
// import connect from 'react-apollo';
// import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions/index';

// styles
import styles from './CustomTabsStyles';

// translations
import en from '../i18n/languages/english';
import fr from '../i18n/languages/fr.json';

I18n.translations = {
  en,
  fr,
};

class CustomTabBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      locale: 'en',
    };

    this.toggleLocale = this.toggleLocale.bind(this);
  }

  toggleLocale() {
    const { locale } = this.state;
    if (locale === 'en') {
      I18n.locale = 'fr';
      this.setState({ locale: 'fr' });
    } else {
      I18n.locale = 'en';
      this.setState({ locale: 'en' });
    }
    console.log('Current locale', I18n.locale);
  }

  render() {
    const { locale } = this.state;
    const { navigation } = this.props;
    return (
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
            onPress={this.toggleLocale}
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
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    localeState: state.locale,
  };
}

// export default connect(mapStateToProps, mapDispatchToProps)(CustomTabBar);
export default CustomTabBar;
