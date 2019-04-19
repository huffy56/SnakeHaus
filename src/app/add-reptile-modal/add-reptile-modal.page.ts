import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';


import { ReptileData } from '../providers/reptile-data';
import { NavController } from '@ionic/angular';

import { Router } from '@angular/router';
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-reptile-modal',
  templateUrl: './add-reptile-modal.page.html',
  styleUrls: ['./add-reptile-modal.page.scss'],
})
export class AddReptileModalPage implements OnInit {
  name: string = "";

  reptiles: Array<Object> = [];
  searchQuery: string = '';

  constructor(navParams: NavParams, public modalController: ModalController, public reptileData: ReptileData, public thisForm: NgForm) {
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

  sendForm()
  {
    var form = document.querySelector('form')!;
    var data = new FormData(form);
    var name = data.get('name') as string;
    var location = data.get('location') as string;
    var species = data.get('species') as string;
    var morph = data.get('morph') as string;
    var DoB = data.get('DoB') as string;
    var food = data.get('food') as string;
    var handling = data.get('handling') as string;
    var acquired = data.get('acquired') as string;
    var scaleVentral = data.get('scaleVentral') as string;
    var scaleMid = data.get('scaleMid') as string;
    var scaleSubCauudal = data.get('scaleSubCuudal') as string;
    var saddles = data.get('saddles') as string;
    var scaleCount5 = data.get('scaleCount5') as string;
    //var picture = data.get('choice') as ImageBitmap;
    var picture = null;
    var active = data.get('active') as string;
    var adopter = data.get('adopter') as string;
    var adoptionDate = data.get('adoptionDate') as string;
    var obDate = data.get('obDate') as string;
    var obData = data.get('obData') as string;
    var feedFood = data.get('feedFood') as string;
    var frequency = data.get('title') as string;
    var schedDate = data.get('schedDate') as string;
    var schedFood = data.get('schedFood') as string;
    var schedComment = data.get('schedComment') as string;

    this.reptileData.send(name, location, species, morph, DoB, handling, acquired, scaleVentral, scaleMid, scaleSubCauudal, saddles, scaleCount5, picture, active, adopter, adoptionDate);
  }
}
