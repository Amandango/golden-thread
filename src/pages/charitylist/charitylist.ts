import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Charity } from '../../models/charity';
import { CharitypagePage } from '../charitypage/charitypage';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    var charity1 = new Charity();
    charity1.id = 1;
    charity1.name = "African Children's Feeding Scheme";
    charity1.description = "Feeding children";
    charity1.logo = "assets/imgs/ACFSlogo.jpg";
    charity1.amount = "$5000"

    var charity2 = new Charity();
    charity2.id = 2;
    charity2.name = "Alzheimer's South Africa";
    charity2.description = "Stopping Alzheimer's";
    charity2.logo = "assets/imgs/alzheimerlogo.png";
    charity2.amount = "$100,000"

    this.charities.push(charity1);
    this.charities.push(charity2);
  }

  navigateToCharity(charityinst: Charity) {
    this.navCtrl.push(CharitypagePage, {
      charityparam: charityinst
    }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharitylistPage');
  }

}
