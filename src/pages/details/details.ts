import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { LocaleService } from '../../app/locale.service';

@Component({
  templateUrl: 'details.html',
})
export class DetailsPage implements OnInit {
  private title: any = {};
  private loading: boolean = true;
  private runtime: any = {};
  private locale: string;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private http: Http,
    private localeService: LocaleService,
  ) { }

  ngOnInit(): void {
    this.locale = this.localeService.getLocale();
    this.loadDetails();
  }

  loadDetails() {
    const requestParams = this.navParams.data;
    // https://angular.io/docs/ts/latest/api/http/index/Http-class.html
    this.http.get(`https://api.justwatch.com/titles/${requestParams.object_type}/${requestParams.id}/locale/${this.locale}`)
      .subscribe(titleDetails => {
        this.title = titleDetails.json();
        if (this.title.runtime) {
          this.runtime.hours = Math.floor(this.title.runtime / 60);
          this.runtime.mins = this.title.runtime % 60;
        }
        this.loading = false;
      });
  }

  goBack() {
    this.navCtrl.pop();
  }

}
