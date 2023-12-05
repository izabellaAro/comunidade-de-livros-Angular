import { GenerosModule } from './generos/generos.module';
import { ResenhasModule } from './resenhas/resenhas.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'autores',
    loadChildren: () => import('./autores/autores.module').then(m => m.AutoresModule)
  },
  {
    path: 'livros',
    loadChildren: () => import('./livros/livros.module').then(m => m.LivrosModule)
  },
  {
    path: 'resenhas',
    loadChildren: () => import('./resenhas/resenhas.module').then(m => m.ResenhasModule)
  },
  {
    path: 'generos',
    loadChildren: () => import('./generos/generos.module').then(m => m.GenerosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
