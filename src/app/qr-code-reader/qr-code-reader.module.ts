import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrCodeReaderPageRoutingModule } from './qr-code-reader-routing.module';

import { QrCodeReaderPage } from './qr-code-reader.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrCodeReaderPageRoutingModule
  ],
  declarations: [QrCodeReaderPage]
})
export class QrCodeReaderPageModule {}
