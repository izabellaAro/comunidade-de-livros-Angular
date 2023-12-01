import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import {MatButtonModule} from '@angular/material/button';
import { AutoresComponent } from '../autores/containers/autores/autores.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatButtonModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class HomeModule { }
