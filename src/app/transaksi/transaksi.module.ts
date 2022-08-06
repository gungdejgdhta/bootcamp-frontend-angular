import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransaksiRoutingModule } from './transaksi-routing.module';
import { ListTransaksiComponent } from './list-transaksi/list-transaksi.component';
import { FormTransaksiComponent } from './form-transaksi/form-transaksi.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ListTransaksiComponent,
    FormTransaksiComponent
  ],
  imports: [
    CommonModule,
    TransaksiRoutingModule,
    ReactiveFormsModule
  ]
})
export class TransaksiModule { }
