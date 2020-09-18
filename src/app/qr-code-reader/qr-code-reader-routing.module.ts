import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrCodeReaderPage } from './qr-code-reader.page';

const routes: Routes = [
  {
    path: '',
    component: QrCodeReaderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrCodeReaderPageRoutingModule {}
