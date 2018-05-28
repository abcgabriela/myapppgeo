import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ContactoPage} from '../contacto/contacto';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  goContacto(): void {
  this.navCtrl.push(ContactoPage);
  }

}
