import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Livros } from '../../models/livros';

@Component({
  selector: 'app-livros-list',
  templateUrl: './livros-list.component.html',
  styleUrls: ['./livros-list.component.scss']
})
export class LivrosListComponent implements OnInit {

  @Input() livros: Livros[] = [];
  @Output() add = new EventEmitter(false);

  readonly displayedColumns = ['titulo', 'genero', 'autor','qntPag', 'actions'];

  constructor() { }

  ngOnInit(): void { }

  onAdd(){
    this.add.emit(true);
   }
}
