import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Livros } from 'src/app/livros/models/livros';
import { LivrosService } from 'src/app/livros/services/livros.service';

import { ResenhasService } from '../../../services/resenhas.service';

@Component({
  selector: 'app-resenha-form',
  templateUrl: './resenha-form.component.html',
  styleUrls: ['./resenha-form.component.scss']
})
export class ResenhaFormComponent implements OnInit {

  form = this.formBuilder.group({
    livroId: [0],
    tituloResenha: [''],
    textoResenha:['']
  });

  livros: Livros[] = [];

  constructor(private formBuilder: NonNullableFormBuilder,
    private service: ResenhasService,
    private snackBar: MatSnackBar,
    private location: Location,
    private livroService: LivrosService,
    ) {
      this.livroService.list()
        .subscribe(
          {
            next: (data) => this.livros = data,
            error: (err) => this.onError('Erro ao consultar Livros')
          });
      console.log(this.livros);
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
