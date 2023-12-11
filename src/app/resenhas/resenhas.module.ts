import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { ResenhaFormComponent } from './resenha-form/resenha-form.component';
import { ResenhasListComponent } from './resenhas-list/resenhas-list.component';
import { ResenhasRoutingModule } from './resenhas-routing.module';
import { ResenhasComponent } from './resenhas/resenhas.component';

@NgModule({
  declarations: [
    ResenhasComponent,
    ResenhasListComponent,
    ResenhaFormComponent,
  ],
  imports: [
    CommonModule,
    ResenhasRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule
  ]
})
export class ResenhasModule { }
