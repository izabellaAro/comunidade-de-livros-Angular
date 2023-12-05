import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { GenerosFormComponent } from './generos-form/generos-form.component';
import { GenerosListComponent } from './generos-list/generos-list.component';
import { GenerosRoutingModule } from './generos-routing.module';
import { GenerosComponent } from './generos/generos.component';


@NgModule({
  declarations: [
    GenerosComponent,
    GenerosListComponent,
    GenerosFormComponent
  ],
  imports: [
    CommonModule,
    GenerosRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class GenerosModule { }
