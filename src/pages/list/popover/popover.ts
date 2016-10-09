import { Component } from '@angular/core';
import { ViewController, NavController } from 'ionic-angular';
import { AboutPage } from '../../about/about';

@Component({
  templateUrl: 'popover.html',
})
export class PopoverPage {
  public aboutPage: any = AboutPage;

  constructor(private viewCtrl: ViewController, private navCtrl: NavController) {
    // this.aboutPage = AboutPage;
  }

  close() {
    this.viewCtrl.dismiss();
  }

  goTo(page) {
    this.viewCtrl.dismiss();
    this.navCtrl.push(page);
  }
}
