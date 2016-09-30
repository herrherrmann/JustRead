import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { ListPage } from '../pages/list/list';
import { TitleResult } from '../pages/list/title-result/title-result';

@NgModule({
  declarations: [
    MyApp,
    ListPage,
    TitleResult,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListPage,
  ],
  providers: []
})
export class AppModule {}
