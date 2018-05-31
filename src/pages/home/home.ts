import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegistrationPage } from '../registration/registration';
import { TabPage } from '../../pages/tab/tab';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  navigateToLoginPage() {
    this.navCtrl.push(LoginPage);
  }

  navigateToRegistration() {
    this.navCtrl.push(RegistrationPage);
  }

}
