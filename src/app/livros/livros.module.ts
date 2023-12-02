import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { LivroFormComponent } from './containers/livro-form/livro-form.component';
import { LivrosListComponent } from './components/livros-list/livros-list.component';
import { LivrosRoutingModule } from './livros-routing.module';
import { LivrosComponent } from './containers/livros/livros.component';


@NgModule({
  declarations: [
    LivrosComponent,
    LivrosListComponent,
    LivroFormComponent
  ],
  imports: [
    CommonModule,
    LivrosRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule
  ]
})
export class LivrosModule {
}
