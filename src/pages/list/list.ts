import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { PopoverController } from 'ionic-angular';
import { Globalization } from 'ionic-native';
import { PopoverPage } from './popover/popover';

@Component({
  templateUrl: 'list.html',
})
export class ListPage implements OnInit {
  private locale: string;
  private titles: Object[];
  private searchTerm: string;
  private searching: boolean;
  private page = 1;

  constructor(private http: Http, public popoverCtrl: PopoverController) {}

  ngOnInit(): void {
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
    const queryLocale = this.locale || 'en_US';
    this.titles = [];
    this.searching = true;
    this.http
      .post(`https://api.justwatch.com/titles/${queryLocale}/popular`, {
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
    const popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: event,
    });
  }
}
