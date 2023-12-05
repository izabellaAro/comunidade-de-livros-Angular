import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GenerosFormComponent } from './generos-form/generos-form.component';
import { GenerosComponent } from './generos/generos.component';

const routes: Routes = [
  {path: '', component: GenerosComponent },
  {path: 'new', component: GenerosFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenerosRoutingModule { }
