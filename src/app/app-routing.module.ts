import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from "./profile/profile.component";
import {CountComponent} from "./count/count.component";
import {ValidationComponent} from "./validation/validation.component";
import {ParentComponent} from "./communication/parent/parent.component";

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
