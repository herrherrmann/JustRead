import { Component, Input } from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';
import { TitleResult } from './title-result/title-result';

@Component({
  templateUrl: 'build/pages/home/home.html',
  directives: [TitleResult],
})
export class HomePage {
  searchTerm: string;
  titles: any;
  searching: boolean;

  constructor(public http: Http) {
    this.search();
  }

  search() {
    console.log('search: ', this.searchTerm);
    this.titles = [];
    this.searching = true;
    this.http
      .post('https://api.justwatch.com/titles/de_DE/popular', {
        content_types: ['show', 'movie'],
        page: 1,
        page_size: 20,
        query: this.searchTerm,
      })
      .subscribe(titles => {
        this.titles = titles.json().items;
        this.searching = false;
      });
  }

  resetSearch() {
    this.searchTerm = '';
    this.search();
  }
}
