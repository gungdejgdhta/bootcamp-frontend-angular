import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from "./profile/profile.component";
import {CountComponent} from "./count/count.component";
import {ValidationComponent} from "./validation/validation.component";
import {ParentComponent} from "./communication/parent/parent.component";
import {ProdusenModule} from "./produsen/produsen.module";
import {ProdukModule} from "./produk/produk.module";
import {TransaksiModule} from "./transaksi/transaksi.module";

const routes: Routes = [
  {
  path: 'profile',
  component: ProfileComponent
  },
  {
    path: 'count',
    component: CountComponent
  },
  {
    path: 'validation',
    component: ValidationComponent
  },
  {
    path: 'communication',
    component: ParentComponent
  },
  {
    path: 'produsen',
    loadChildren: () => ProdusenModule
  },
  {
    path: 'produk',
    loadChildren: () => ProdukModule
  },
  {
    path: 'transaksi',
    loadChildren: () => TransaksiModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
