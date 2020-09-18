import {Component} from '@angular/core';

import {NavController, Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {Deeplinks} from '@ionic-native/deeplinks/ngx';

// pages
import {HomePage} from './home/home.page';
import {GeolocationPage} from './geolocation/geolocation.page';
import {QrCodeReaderPage} from './qr-code-reader/qr-code-reader.page';
import {NfcReaderPage} from './nfc-reader/nfc-reader.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
      private platform: Platform,
      private navController: NavController,
      private splashScreen: SplashScreen,
      private statusBar: StatusBar,
      private deepLinks: Deeplinks
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.initializeDeepLinks();
    });
  }

  initializeDeepLinks() {
    this.deepLinks.routeWithNavController(this.navController, {
      '/home': HomePage,
      '/geolocation': GeolocationPage,
      '/read-qr-code': QrCodeReaderPage,
      '/nfc-reader': NfcReaderPage
    }).subscribe(match => {
      console.log('Successfully matched route', match);
    }, nomatch => {
      console.error('Got a deeplink that didn\'t match', nomatch);
    });
  }
}
