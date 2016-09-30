import { Component } from '@angular/core';
import { ListPage } from '../list/list';
import { AboutPage } from '../about/about';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  public tab1Root: any;
  public tab2Root: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = ListPage;
    this.tab2Root = AboutPage;
  }
}
