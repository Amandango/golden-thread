import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { CharitylistPage } from '../charitylist/charitylist';
import { ProfileinfoPage } from '../profileinfo/profileinfo';
import { ProfilePage } from '../profile/profile';
import { User } from '../../models/user';
import { SettingsPage } from '../settings/settings';

/**
 * Generated class for the TabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab',
  templateUrl: 'tab.html',
})
export class TabPage {

  tab1Root: any = ProfileinfoPage;
  tab2Root: any = ProfilePage;
  public user: User = new User();

  chatParams = {
    user1: 'admin',
    user2: 'ionic'
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = this.navParams.get("user");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabPage');
    this.user=this.navParams.get("user");
    console.log(this.user);
  }

  navigateToCharities() {
    this.navCtrl.push(CharitylistPage, {
      user: this.user
    });
  }

  navigateToSettings() {
    this.navCtrl.push(SettingsPage, {
      user: this.user
    });
  }

}
