import { Component } from '@angular/core';
import { ViewController, NavController } from 'ionic-angular';
import { AboutPage } from '../../about/about';

@Component({
  template: `
    <ion-list>
      <button ion-item (click)="goTo(aboutPage)">About</button>
    </ion-list>
  `
})

export class PopoverPage {
  private aboutPage: any;

  constructor(private viewCtrl: ViewController, private navCtrl: NavController) {
    this.aboutPage = AboutPage;
  }

  close() {
    this.viewCtrl.dismiss();
  }

  goTo(page) {
    this.viewCtrl.dismiss();
    this.navCtrl.push(page);
  }
}
