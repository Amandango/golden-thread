import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { Charity } from '../../models/charity';
import { TabPage } from '../tab/tab';

@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {

  public amount: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }

  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Confirm donation',
      message: 'Click submit to send your donation!',
      buttons: [
        {
          text: 'cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Submit',
          handler: () => {
            this.navCtrl.push(TabPage);
          }
        }
      ]
    });
    alert.present();
}
}
