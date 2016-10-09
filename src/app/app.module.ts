import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { DetailsPage } from '../pages/details/details';
import { ListPage } from '../pages/list/list';
import { TitleResult } from '../pages/list/title-result/title-result';
import { PopoverPage } from '../pages/list/popover/popover';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    DetailsPage,
    ListPage,
    PopoverPage,
    TitleResult,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    DetailsPage,
    ListPage,
    PopoverPage,
    TitleResult,
  ],
  providers: [MyApp]
})
export class AppModule { }
