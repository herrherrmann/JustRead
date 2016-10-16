import { Injectable } from '@angular/core';
// import { Globalization } from 'ionic-native';

@Injectable()
export class LocaleService {
  // constructor() {}

  private LOCALE_MAPPING = {
    de: 'de_DE',
    en: 'en_US',
    default: 'en_US',
  };

  getLocale(): string {
    const language = window && window.navigator && window.navigator.language ? window.navigator.language : null;
    if (language && this.LOCALE_MAPPING[language]) {
      return this.LOCALE_MAPPING[language];
    } else {
      return this.LOCALE_MAPPING.default;
    }
  }
}
