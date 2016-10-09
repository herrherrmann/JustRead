import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
  templateUrl: 'details.html',
})
export class DetailsPage implements OnInit {
  private title: any;
  private loading: boolean;
  private runtime: any;
  // static for now.
  private locale: string = 'en_US';

  constructor(private navCtrl: NavController, private navParams: NavParams, private http: Http) { }

  ngOnInit(): void {
    this.loadDetails();
  }

  loadDetails() {
    const requestParams = this.navParams.data;
    this.title = {};
    this.runtime = {};
    this.loading = true;
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
