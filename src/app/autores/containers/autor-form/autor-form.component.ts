import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GenerosService } from 'src/app/generos/services/generos.service';

import { Genero } from '../../models/autores';
import { AutoresService } from '../../services/autores.service';

@Component({
  selector: 'app-autor-form',
  templateUrl: './autor-form.component.html',
  styleUrls: ['./autor-form.component.scss']
})
export class AutorFormComponent implements OnInit {

  form = this.formBuilder.group({
    nome: [''],
    generoId: ['']
  });

  generos: Genero[] = [];

  constructor(private formBuilder: NonNullableFormBuilder,
    private service: AutoresService,
    private generosService: GenerosService,
    private snackBar: MatSnackBar,
    private location: Location) {
      this.generosService.list()
        .subscribe(
          {
            next: (data) => this.generos = data,
            error: (err) => this.onError('Erro ao consultar Gêneros')
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
    this.snackBar.open('Autor salvo com sucesso!', '', {duration: 5000});
    this.onCancel();
  }

  private onError(message: string = 'Erro ao salvar livro.'){
    this.snackBar.open(message, '', {duration: 5000});
  }
}
