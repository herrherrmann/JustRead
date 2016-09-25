import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailsPage } from '../../../pages/details/details';

@Component({
  selector: 'result',
  templateUrl: 'build/pages/home/title-result/title-result.html'
})
export class TitleResult {
  @Input() titleObject: any;

  constructor(public navCtrl: NavController) {}

  open() {
    console.log('opening title...');
    this.navCtrl.push(DetailsPage, {
      object_type: this.titleObject.object_type,
      id: this.titleObject.id
    });
  }
}
