import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GenerosFormComponent } from './containers/generos/generos-form/generos-form.component';
import { GenerosComponent } from './containers/generos/generos/generos.component';

const routes: Routes = [
  {path: '', component: GenerosComponent },
  {path: 'new', component: GenerosFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenerosRoutingModule { }
