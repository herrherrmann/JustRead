import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';


/*
  Generated class for the DetailsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/details/details.html',
})
export class DetailsPage {
  title: Object;
  searching: boolean;

  constructor(private navCtrl: NavController, navParams: NavParams, http: Http) {
    this.title = {};
    this.searching = true;
    // static for now.
    const locale = 'en_US';
    const requestParams = navParams.data;
    // Load details!
    // GET https://api.justwatch.com/titles/movie/122347/locale/de_DE
    // https://angular.io/docs/ts/latest/api/http/index/Http-class.html
    http.get(`https://api.justwatch.com/titles/${requestParams.object_type}/${requestParams.id}/locale/${locale}`)
      .subscribe(titleDetails => {
        console.log('titleDetails.json(): ', titleDetails.json());
        this.title = titleDetails.json();
        this.searching = false;
      });
  }

  goBack() {
    this.navCtrl.pop();
  }

}