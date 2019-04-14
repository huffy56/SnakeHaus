import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';


import { ReptileData } from '../providers/reptile-data';
import { NavController } from '@ionic/angular';

import { Router } from '@angular/router';

@Component({
  selector: 'app-add-reptile-modal',
  templateUrl: './add-reptile-modal.page.html',
  styleUrls: ['./add-reptile-modal.page.scss'],
})
export class AddReptileModalPage implements OnInit {

  reptiles: Array<Object> = [];
  searchQuery: string = '';

  constructor(navParams: NavParams, public modalController: ModalController, public reptileData: ReptileData) {
    reptileData.getReptiles().then(theResult => {
      this.reptiles = theResult;
    })
  }

  async dismiss(){
    await this.modalController.dismiss();
  }

  ngOnInit() {
  }

  getReptiles(event)
  {
    this.reptileData.getReptiles().then(theResult => {
      this.reptiles = theResult;
    })
    let queryString = event.target.value;
    if(queryString != undefined)
    {
      if(queryString.trim() == '')
      {
        return;
      }
      this.reptileData.getFilteredReptiles(queryString).then(theResult => {
        this.reptiles = theResult;
      })
    }
  }

  resetList(event)
  {
    this.reptileData.getReptiles().then(theResult => {
      this.reptiles = theResult;
    })
  }
}
