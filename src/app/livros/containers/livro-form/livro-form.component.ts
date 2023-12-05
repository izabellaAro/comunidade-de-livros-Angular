import { Observable, catchError, of } from 'rxjs';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { LivrosService } from '../../services/livros.service';
import { Autor, Genero } from '../../models/livros';
import { GenerosService } from 'src/app/generos/services/generos.service';
import { AutoresService } from 'src/app/autores/services/autores.service';

@Component({
  selector: 'app-livro-form',
  templateUrl: './livro-form.component.html',
  styleUrls: ['./livro-form.component.scss']
})
export class LivroFormComponent implements OnInit {

  form = this.formBuilder.group({
    titulo: [''],
    generoId: [''],
    autorId:[''],
    qntPag: ['']
  });

  generos: Genero[] = [];
  autores: Autor[] = [];

  constructor(private formBuilder: NonNullableFormBuilder,
    private service: LivrosService,
    private generoService: GenerosService,
    private autorService: AutoresService,
    private snackBar: MatSnackBar,
    private location: Location) {
      this.generoService.list()
        .subscribe(
          {
            next: (data) => this.generos = data,
            error: (err) => this.onError('Erro ao consultar Gêneros')
          });
      this.autorService.list()
        .subscribe(
          {
            next: (data) => this.autores = data,
            error: (err) => this.onError('Erro ao consultar Autores')
          });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service.save(this.form.value)
    .subscribe(result => this.onSucess(), error => this.onError());
  }

  onCancel(){
    this.location.back();
  }

  private onSucess(){
    this.snackBar.open('Livro salvo com sucesso!', '', {duration: 5000});
    this.onCancel();
  }

  private onError(message: string = 'Erro ao salvar livro.'){
    this.snackBar.open(message, '', {duration: 5000});
  }
}
