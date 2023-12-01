import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AutorFormComponent } from './containers/autor-form/autor-form.component';
import { AutoresComponent } from './containers/autores/autores.component';

const routes: Routes = [
  {path: '', component: AutoresComponent },
  {path: 'new', component: AutorFormComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutoresRoutingModule { }
