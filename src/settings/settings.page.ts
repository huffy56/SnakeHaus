import { Component, OnInit } from '@angular/core';
import { ReptileData } from '../providers/reptile-data'
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
//import { ModalPage } from '../modal/modal.page';
import { AddReptileModalPage } from '../add-reptile-modal/add-reptile-modal.page';
import { UpdateReptileModalPage } from '../update-reptile-modal/update-reptile-modal.page';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {

  reptileInfo: Boolean;
  reptileFeed: Boolean;


  constructor(public reptileData: ReptileData, public route: ActivatedRoute, public modalController: ModalController) {
    this.reptileInfo = false;
    this.reptileFeed = false;
  }

  async presentAddReptileModal() {
    const modal = await this.modalController.create({
      component: AddReptileModalPage,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }

  async presentUpdateReptileModal() {
    const modal = await this.modalController.create({
      component: UpdateReptileModalPage,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }

}
