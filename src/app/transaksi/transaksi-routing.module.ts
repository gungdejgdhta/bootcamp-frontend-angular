import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListTransaksiComponent} from "./list-transaksi/list-transaksi.component";
import {FormTransaksiComponent} from "./form-transaksi/form-transaksi.component";

const routes: Routes = [
  {
    path: '',
    component: ListTransaksiComponent
  },
  {
    path: 'create',
    component: FormTransaksiComponent
  },
  {
    path: 'update/:id',
    component: FormTransaksiComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransaksiRoutingModule {
}
