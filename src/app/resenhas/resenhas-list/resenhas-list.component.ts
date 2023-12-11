import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Resenha } from '../models/resenha';

@Component({
  selector: 'app-resenhas-list',
  templateUrl: './resenhas-list.component.html',
  styleUrls: ['./resenhas-list.component.scss']
})
export class ResenhasListComponent implements OnInit {

  @Input() resenhas: Resenha[] = [];
  @Output() add = new EventEmitter(false);
  @Output() consultar = new EventEmitter(false);

  readonly displayedColumns = ['tituloLivro', 'nomeGenero', 'nomeAutor', 'tituloResenha', 'actions'];

  constructor() { }

  ngOnInit(): void { }

  onAdd(){
    this.add.emit(true);
   }

}
