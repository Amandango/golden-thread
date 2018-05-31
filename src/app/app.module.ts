import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SuperTabsModule } from 'ionic2-super-tabs';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CharitypagePage } from '../pages/charitypage/charitypage';
import { CharitylistPage } from '../pages/charitylist/charitylist';
import { LoginPage } from '../pages/login/login';
import { RegistrationPage } from '../pages/registration/registration';
import { ProfilePage } from '../pages/profile/profile';
import { PaymentPage } from '../pages/payment/payment';
import { TabPage } from '../pages/tab/tab';
import { ProfileinfoPage } from '../pages/profileinfo/profileinfo';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CharitypagePage,
    CharitylistPage,
    LoginPage,
    RegistrationPage,
    ProfilePage,
    PaymentPage,
    TabPage, 
    ProfileinfoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SuperTabsModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CharitypagePage,
    CharitylistPage,
    LoginPage,
    RegistrationPage,
    ProfilePage,
    PaymentPage,
    TabPage,
    ProfileinfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
