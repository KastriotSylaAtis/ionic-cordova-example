import {Component} from '@angular/core';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {NativeGeocoder, NativeGeocoderOptions} from '@ionic-native/native-geocoder/ngx';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.page.html',
  styleUrls: ['./geolocation.page.scss'],
})
export class GeolocationPage {

  latitude: any = 0;
  longitude: any = 0;
  address: string;

  options = {
    timeout: 10000,
    enableHighAccuracy: true,
    maximumAge: 3600
  };

  nativeGeocoderOptions: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };

  constructor(
      private geolocation: Geolocation,
      private nativeGeocoder: NativeGeocoder
  ) {
  }

  getCurrentCoordinates() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  getAddress(lat, long) {
    this.nativeGeocoder.reverseGeocode(lat, long, this.nativeGeocoderOptions).then((res) => {
      this.address = JSON.stringify(res[0]);
    }).catch((error) => {
      console.log('Error getting location' + JSON.stringify(error));
    });
  }
}
