import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailsPage } from '../../details/details';

@Component({
  selector: 'result',
  templateUrl: 'title-result.html'
})
export class TitleResult {
  @Input() titleObject: any;

  constructor(public navCtrl: NavController) {}

  open() {
    this.navCtrl.push(DetailsPage, {
      object_type: this.titleObject.object_type,
      id: this.titleObject.id
    });
  }
}
