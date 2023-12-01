import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { AutorFormComponent } from './autor-form/autor-form.component';
import { AutoresRoutingModule } from './autores-routing.module';
import { AutoresComponent } from './autores/autores.component';
import { AutoresListComponent } from './autores-list/autores-list.component';


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
