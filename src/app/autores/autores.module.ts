import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { AutoresListComponent } from './components/autores-list/autores-list.component';
import { AutorFormComponent } from './containers/autor-form/autor-form.component';
import { AutoresComponent } from './containers/autores/autores.component';
import { AutoresRoutingModule } from './autores-routing.module';


@NgModule({
  declarations: [
    AutoresComponent,
    AutorFormComponent,
    AutoresListComponent
  ],
  imports: [
    CommonModule,
    AutoresRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})

export class AutoresModule { }
