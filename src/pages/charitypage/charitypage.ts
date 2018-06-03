import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Charity } from '../../models/charity';
import { PaymentPage } from '../../pages/payment/payment';
import { User } from '../../models/user';

/**
 * Generated class for the CharitypagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-charitypage',
  templateUrl: 'charitypage.html',
})
export class CharitypagePage {

  public charity: Charity;
  public user: User=new User();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = this.navParams.get("user");
    this.charity=this.navParams.get("charityparam");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharitypagePage');
  }

  navigateToPayments() {
    this.navCtrl.push(PaymentPage, {
      user: this.user
    });
  }



}
