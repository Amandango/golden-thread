import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
import { CharitylistPage } from '../charitylist/charitylist';
import { Charity } from '../../models/charity';
import { LoginPage } from '../../pages/login/login';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})

export class ProfilePage {

    public username: string;

    @ViewChild('doughnutCanvas') doughnutCanvas;
 
    doughnutChart: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    this.username = this.navParams.get("username");
    
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
    this.navCtrl.push(CharitylistPage);
  }

}
