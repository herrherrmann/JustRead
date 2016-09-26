import { Component, Input } from '@angular/core';
import { Http } from '@angular/http';
import { NavController, PopoverController } from 'ionic-angular';
import { Globalization } from 'ionic-native';
import { TitleResult } from './title-result/title-result';
import { PopoverPage } from './popover/popover';


@Component({
  templateUrl: 'build/pages/list/list.html',
  directives: [TitleResult],
})
export class ListPage {
  locale: string;
  searchTerm: string;
  titles: any;
  searching: boolean;
  page = 1;
  // private popoverCtrl: PopoverCtrl;

  constructor(public http: Http, private popoverCtrl: PopoverController) {
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
        page_size: 14,
        query: this.searchTerm,
      })
      // .catch(err => {
      //   return err;
      // })
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

  showPopover(event) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: event
    });
  }
}
