import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'about.html'
})
export class AboutPage {
  constructor(
    private navCtrl: NavController,
  ) {}

  close() {
    this.navCtrl.pop();
  }
}
