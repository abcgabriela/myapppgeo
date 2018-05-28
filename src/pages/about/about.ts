import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ContactoPage} from '../contacto/contacto';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }
    goContacto(): void {
  this.navCtrl.push(ContactoPage);
  }

}
