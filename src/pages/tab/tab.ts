import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { CharitylistPage } from '../charitylist/charitylist';
import { ProfileinfoPage } from '../profileinfo/profileinfo';
import { ProfilePage } from '../profile/profile';

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
  public username: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabPage');
    this.username=this.navParams.get("username");
  }

  navigateToCharities() {
    this.navCtrl.push(CharitylistPage);
  }

  popToRoot() {
    this.navCtrl.popToRoot();
  }

}
