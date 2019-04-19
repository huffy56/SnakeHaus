import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AddReptileModalPage } from './add-reptile-modal/add-reptile-modal.page';
import { UpdateReptileModalPage } from './update-reptile-modal/update-reptile-modal.page';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpModule } from '@angular/http';

import { ReptileData } from './providers/reptile-data';
import { FeedData } from './providers/feed-data';
import { FeedSchedule } from './providers/feed-schedule';
import { MedsData} from './providers/meds-data';
import { ObservationData } from './providers/observations-data';

import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, AddReptileModalPage, UpdateReptileModalPage],
  entryComponents: [AddReptileModalPage, UpdateReptileModalPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpModule, FormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ReptileData,
    FeedData,
    FeedSchedule,
    MedsData, ObservationData, NgForm
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
