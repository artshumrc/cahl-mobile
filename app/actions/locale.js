import I18n from 'react-native-i18n';
import { SET_LOCALE } from './types';

export function getLocale() {
}

export function setLocale(locale) {
  I18n.locale = locale;

  return {
    type: SET_LOCALE,
    locale,
  };
}
