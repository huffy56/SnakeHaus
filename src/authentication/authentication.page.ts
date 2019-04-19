import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.page.html',
  styleUrls: ['./authentication.page.scss'],
})
export class AuthenticationPage implements OnInit {

  constructor(public router: Router, public navCtrl: NavController) { }

  ngOnInit() {
  }

  authenticate()
  {
    //This is where I need to verify the data...
    var username: string = document.getElementById("name").nodeValue;
    console.log(username);
    //I need to add the actual verification here before navigation
    let url = './tabs/settings2/';
    this.router.navigate([url]); 
  }
}
