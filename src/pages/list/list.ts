import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { PopoverController } from 'ionic-angular';
import { PopoverPage } from './popover/popover';
import { LocaleService } from '../../app/locale.service';

@Component({
  templateUrl: 'list.html',
})
export class ListPage implements OnInit {
  private locale: string;
  private titles: Object[] = [];
  private searchTerm: string = '';
  private searching: boolean = false;
  private page: number = 1;

  constructor(
    private http: Http,
    private popoverCtrl: PopoverController,
    private localeService: LocaleService,
  ) { }

  ngOnInit(): void {
    this.locale = this.localeService.getLocale();
    this.search();
  }

  changePage(offset): void {
    this.page += offset;
    if (this.page === 0) {
      this.page = 1;
    }
    this.search();
  }

  search(): void {
    this.titles = [];
    this.searching = true;
    this.http
      .post(`https://api.justwatch.com/titles/${this.locale}/popular`, {
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
