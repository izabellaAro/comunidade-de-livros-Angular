import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AutoresService } from 'src/app/autores/services/autores.service';
import { GenerosService } from 'src/app/generos/services/generos.service';

import { Autor, Genero } from '../models/resenha';
import { ResenhasService } from '../services/resenhas.service';

@Component({
  selector: 'app-resenha-form',
  templateUrl: './resenha-form.component.html',
  styleUrls: ['./resenha-form.component.scss']
})
export class ResenhaFormComponent implements OnInit {

  form = this.formBuilder.group({
    tituloLivro: [''],
    nomeAutorId: [''],
    nomeGeneroId: [''],
    tituloResenha: [''],
    textoResenha:['']
  });

  generos: Genero[] = [];
  autores: Autor[] = [];

  constructor(private formBuilder: NonNullableFormBuilder,
    private service: ResenhasService,
    private snackBar: MatSnackBar,
    private location: Location,
    private generoService: GenerosService,
    private autorService: AutoresService) {
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
    this.snackBar.open('Resenha salva com sucesso!', '', {duration: 5000});
    this.onCancel();
  }

  private onError(message: string = 'Erro ao salvar resenha.'){
    this.snackBar.open(message, '', {duration: 5000});
  }
}
