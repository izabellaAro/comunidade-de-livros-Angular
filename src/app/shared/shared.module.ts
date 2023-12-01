import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { AutoresGeneroPipe } from './pipes/autores-genero.pipe';


@NgModule({
  declarations: [
    ErrorDialogComponent,
    AutoresGeneroPipe
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [
    ErrorDialogComponent,
    AutoresGeneroPipe
  ]
})
export class SharedModule { }
