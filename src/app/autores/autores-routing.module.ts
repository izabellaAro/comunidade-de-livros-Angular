import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AutorFormComponent } from './autor-form/autor-form.component';
import { AutoresComponent } from './autores/autores.component';

const routes: Routes = [
  {path: '', component: AutoresComponent },
  {path: 'new', component: AutorFormComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutoresRoutingModule { }
