import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResenhaFormComponent } from './containers/resenhas/resenha-form/resenha-form.component';
import { ResenhasComponent } from './containers/resenhas/resenhas.component';

const routes: Routes = [
  {path: '', component: ResenhasComponent},
  {path: 'newResenha', component: ResenhaFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResenhasRoutingModule { }
