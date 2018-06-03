import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
import { CharitylistPage } from '../charitylist/charitylist';
import { Charity } from '../../models/charity';
import { LoginPage } from '../../pages/login/login';
import { User } from '../../models/user';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})

export class ProfilePage {

    public username: string;
    public user: User = new User();

    @ViewChild('doughnutCanvas') doughnutCanvas;
 
    doughnutChart: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    this.user = this.navParams.get("user");
    
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
 
      type: 'doughnut',
      data: {
          labels: ["African Children's Feeding Scheme", "Alzheimer's South Africa"],
          datasets: [{
              label: '% Donated to Charity',
              data: [20, 80],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)'

              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ]
          }]
      }

  });

}

  navigateToCharities() {
    alert(this.user.username);
    this.navCtrl.push(CharitylistPage, {
      user: this.user
    });
  }

}
