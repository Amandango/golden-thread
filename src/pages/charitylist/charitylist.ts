import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Charity } from '../../models/charity';
import { CharitypagePage } from '../charitypage/charitypage';
import { User } from '../../models/user';

/**
 * Generated class for the CharitylistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-charitylist',
  templateUrl: 'charitylist.html',
})
export class CharitylistPage {

  public charities: Array<Charity> =[];
  public user: User = new User ();

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.user = this.navParams.get("user");

    var charity1 = new Charity();
    charity1.id = 1;
    charity1.name = "African Children's Feeding Scheme";
    charity1.description = "Feeding children";
    charity1.logo = "assets/ACFSlogo.jpg";
    charity1.amount = "$5000"

    var charity2 = new Charity();
    charity2.id = 2;
    charity2.name = "Alzheimer's South Africa";
    charity2.description = "Stopping Alzheimer's";
    charity2.logo = "assets/alzheimerlogo.png";
    charity2.amount = "$100,000"

    this.charities.push(charity1);
    this.charities.push(charity2);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharitylistPage');
  }

  navigateToCharity(charityinst: Charity) {
    this.navCtrl.push(CharitypagePage, {
      charityparam: charityinst,
      user: this.user
    }
    );
  }

}
