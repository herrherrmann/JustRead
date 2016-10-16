import { Injectable } from '@angular/core';
// import { Globalization } from 'ionic-native';

@Injectable()
export class LocaleService {
  // locale: string;
  // constructor() {}

  private LOCALE_MAPPING = {
    de: 'de_DE',
    en: 'en_US',
    default: 'en_US',
  };

  getLocale(): string {
    const language = window.navigator.language;
    return this.LOCALE_MAPPING[language] ? this.LOCALE_MAPPING[language] : this.LOCALE_MAPPING.default;
  }
}
