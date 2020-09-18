import {Component} from '@angular/core';
import {Ndef, NFC} from '@ionic-native/nfc/ngx';

@Component({
  selector: 'app-nfc-reader',
  templateUrl: './nfc-reader.page.html',
  styleUrls: ['./nfc-reader.page.scss'],
})
export class NfcReaderPage {

  nfcReaderData: any;

  constructor(
      private nfc: NFC,
      private ndef: Ndef
  ) {
  }

  readNFC() {
    this.nfc.addNdefListener(() => {
      console.log('success attached ndef listener');
    }, (err) => {
      console.log('error attaching ndef' + err);
    }).subscribe((event) => {
      console.log('received ndef message. the tag contains: ' + event.tag);
      console.log('decoded tag id' + this.nfc.bytesToHexString(event.tag.id));

      const message = this.ndef.textRecord('Hello world');
      this.nfc.share([message]).then((response) => {
        alert(response);
      }).catch(error => {
        console.log('error', error);
      });
    });
  }

}
