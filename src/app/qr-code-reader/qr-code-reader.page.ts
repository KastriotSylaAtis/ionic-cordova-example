import {Component} from '@angular/core';
import {BarcodeScanner, BarcodeScannerOptions} from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-qr-code-reader',
  templateUrl: './qr-code-reader.page.html',
  styleUrls: ['./qr-code-reader.page.scss'],
})
export class QrCodeReaderPage {

  scannerData: any;
  options: BarcodeScannerOptions;

  constructor(
      private barcodeScanner: BarcodeScanner
  ) {
  }

  encode() {
    this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, 'Encode this text').then(response => {
      alert('success' + response);
    }).catch(error => {
      console.log('error: ', error);
    });
  }

  scan() {
    this.options = {
      prompt: 'Scan your barcode'
    };

    this.barcodeScanner.scan().then(barcodeData => {
      this.scannerData = barcodeData;
    }).catch(error => {
      console.log('Error scanning the code: ', error);
    });
  }
}
