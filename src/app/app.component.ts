import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { ReptileData } from './providers/reptile-data';
import { FeedData } from './providers/feed-data';
import { FeedSchedule } from './providers/feed-schedule';
import { MedsData } from './providers/meds-data';
import { ObservationData } from './providers/observations-data';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  providers: [ ReptileData, FeedData, FeedSchedule, MedsData, ObservationData]
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public reptileData: ReptileData,
    public feedData: FeedData,
    public feedSchedule: FeedSchedule,
    private medsData: MedsData,
    private observationData: ObservationData
  ) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
    reptileData.load();
    feedData.load();
    feedSchedule.load();
    medsData.load();
    observationData.load();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}

export class ReptileListPage {
  reptiles: Array<object> = [];

  constructor(public navCtrl: NavController, public reptileData: ReptileData){
    reptileData.getReptiles().then(Result => {
      this.reptiles = Result;
    })
  }
  goReptileDetails(theReptileData){
    console.log(theReptileData);
  }
}
