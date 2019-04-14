import { Component, OnInit } from '@angular/core';

import { ReptileData } from '../providers/reptile-data';
import { NavController } from '@ionic/angular';

import { Router } from '@angular/router';

@Component({
  selector: 'app-park-list',
  templateUrl: './park-list.page.html',
  styleUrls: ['./park-list.page.scss'],
})
export class ParkListPage implements OnInit {

  reptiles: Array<Object> = [];
  searchQuery: string = '';

  constructor(public navCtrl: NavController, public reptileData: ReptileData, public router: Router) {
    reptileData.getReptiles().then(theResult => {
      this.reptiles = theResult;;
    })
   }

   goReptileDetails(theReptileData){
     let url = './tabs/details/' + theReptileData.SnakeName;
     this.router.navigate([url]); 
     console.log("This is the reptile data...");
     console.log(theReptileData);
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

   customHeaderFn(record, recordIndex, records){
    if(recordIndex > 0)
    {
        if(record.SnakeName[0] !== records[recordIndex-1].SnakeName[0]){
            return record.SnakeName[0];
        } else {
            return null;
        }
    } else {
        return record.SnakeName[0];
    }
  }

  ngOnInit() {
  }

}
