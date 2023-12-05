import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { GenerosService } from '../services/generos.service';

@Component({
  selector: 'app-generos-form',
  templateUrl: './generos-form.component.html',
  styleUrls: ['./generos-form.component.scss']
})
export class GenerosFormComponent implements OnInit {

  form = this.formBuilder.group({
    nome: [''],
  });

  constructor(private formBuilder: NonNullableFormBuilder,
    private service: GenerosService,
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
    this.snackBar.open('Gênero salvo com sucesso!', '', {duration: 5000});
    this.onCancel();
  }

  private onError(message: string = 'Erro ao salvar gênero.'){
    this.snackBar.open(message, '', {duration: 5000});
  }
}
