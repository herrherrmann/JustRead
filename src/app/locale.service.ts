import { Injectable } from '@angular/core';
// http://ionicframework.com/docs/v2/native/globalization/
// import { Globalization } from 'ionic-native';
import { Platform } from 'ionic-angular';

@Injectable()
export class LocaleService {
  constructor(public platform: Platform) {}

  private LOCALE_MAPPING = {
    de: 'de_DE',
    en: 'en_US',
    default: 'en_US',
  };

  getLocale(): string {
    const language = this.platform.lang();
    console.log('language: ', language);
    // const language = window && window.navigator && window.navigator.language ? window.navigator.language : null;
    if (language && this.LOCALE_MAPPING[language]) {
      return this.LOCALE_MAPPING[language];
    } else {
      return this.LOCALE_MAPPING.default;
    }
  }
}
