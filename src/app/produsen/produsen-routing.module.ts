import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListProdusenComponent} from "./list-produsen/list-produsen.component";
import {FormProdusenComponent} from "./form-produsen/form-produsen.component";

const routes: Routes = [
  {
    path: '',
    component: ListProdusenComponent
  },
  {
    path: 'form',
    component: FormProdusenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdusenRoutingModule {
}
