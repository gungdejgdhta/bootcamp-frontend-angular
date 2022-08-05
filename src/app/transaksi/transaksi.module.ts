import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransaksiRoutingModule } from './transaksi-routing.module';
import { ListTransaksiComponent } from './list-transaksi/list-transaksi.component';
import { FormTransaksiComponent } from './form-transaksi/form-transaksi.component';


@NgModule({
  declarations: [
    ListTransaksiComponent,
    FormTransaksiComponent
  ],
  imports: [
    CommonModule,
    TransaksiRoutingModule
  ]
})
export class TransaksiModule { }
