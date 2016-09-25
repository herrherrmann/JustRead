import { Component, Input } from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';
import { Globalization } from 'ionic-native';
import { TitleResult } from './title-result/title-result';


@Component({
  templateUrl: 'build/pages/home/home.html',
  directives: [TitleResult],
})
export class HomePage {
  locale: string;
  searchTerm: string;
  titles: any;
  searching: boolean;
  page = 1;

  constructor(public http: Http) {
    this.search();
    // Globalization.getLocaleName()
    //   .then(locale => this.locale = locale)
    //   .catch(error => {});
  }

  changePage(offset) {
    this.page += offset;
    if (this.page === 0) {
      this.page = 1;
    }
    this.search();
  }

  search() {
    const locale = this.locale || 'en_US';
    this.titles = [];
    this.searching = true;
    this.http
      .post(`https://api.justwatch.com/titles/${locale}/popular`, {
        content_types: ['show', 'movie'],
        page: this.page,
        page_size: 20,
        query: this.searchTerm,
      })
      .subscribe(titles => {
        this.titles = titles.json().items;
        this.searching = false;
      });
  }

  resetSearch() {
    this.page = 1;
    this.searchTerm = '';
    this.search();
  }
}
