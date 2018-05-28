import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ContactoPage} from '../contacto/contacto';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }
  goContacto(): void {
  this.navCtrl.push(ContactoPage);
  }
}

