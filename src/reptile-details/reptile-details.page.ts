import { Component, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import { FeedData } from '../providers/feed-data';
import { FeedSchedule } from '../providers/feed-schedule';
import { ReptileData } from '../providers/reptile-data'
import { MedsData } from '../providers/meds-data';
import { ObservationData } from '../providers/observations-data';



@Component({
  selector: 'app-reptile-details',
  templateUrl: './reptile-details.page.html',
  styleUrls: ['./reptile-details.page.scss'],
})

export class ReptileDetailsPage {

  reptileInfo: Object;
  feedInfo: Object;
  feedSchedule: Object;
  medsInfo: Object;
  observationInfo: Array<Object>;

  feedSchedInfo: Boolean;
  observations: Boolean;
  feed: Boolean;
  basicInfo: Boolean;
  medication: Boolean;
  //observations

  constructor(public reptileData: ReptileData, public feedData: FeedData, public feedSched: FeedSchedule, public medsData: MedsData, public obsData: ObservationData, public route: ActivatedRoute) {
    var name = this.route.snapshot.paramMap.get('id');
    this.reptileInfo = reptileData.getReptile(name);
    this.feedInfo = feedData.getFeed(name);
    this.feedSchedule = feedSched.getFeedSchedule(name);
    this.medsInfo = medsData.getMeds(name);
    this.observationInfo = obsData.getObservations(name);

    this.feedSchedInfo = false;    
    this.observations = false;
    this.feed = false;
    this.basicInfo = false;
    this.medication = false;
  }

}
