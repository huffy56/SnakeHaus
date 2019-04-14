import { Component, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ReptileData } from '../providers/reptile-data'
import { ActivatedRoute } from '@angular/router';
import { FeedData } from '../providers/feed-data';


@Component({
  selector: 'app-reptile-details',
  templateUrl: './reptile-details.page.html',
  styleUrls: ['./reptile-details.page.scss'],
})

export class ReptileDetailsPage {

  reptileInfo: Object;
  feedInfo: Object;
  observations: Boolean;
  feed: Boolean;
  basicInfo: Boolean;

  constructor(public reptileData: ReptileData, public feedData: FeedData, public route: ActivatedRoute) {
    var name = this.route.snapshot.paramMap.get('id');
    this.reptileInfo = reptileData.getReptile(name);
    this.feedInfo = feedData.getFeed(name);
    this.observations = false;
    this.feed = false;
    this.basicInfo = false;
  }

}
