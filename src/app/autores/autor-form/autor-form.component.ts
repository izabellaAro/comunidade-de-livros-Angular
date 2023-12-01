import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AutoresService } from '../services/autores.service';

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

  constructor(private formBuilder: NonNullableFormBuilder,
    private service: AutoresService,
    private snackBar: MatSnackBar,
    private location: Location) {}

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

  private onError(){
    this.snackBar.open('Erro ao salvar autor.', '', {duration: 5000});
  }
}
