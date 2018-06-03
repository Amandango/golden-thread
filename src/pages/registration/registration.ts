import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { TabPage } from '../tab/tab';
import { User } from '../../models/user';

@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {

  public username: string;
  public user: User= new User();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }

  navigateToProfile() {
    this.navCtrl.push(TabPage, {
      user: this.user
    });
  }

}
