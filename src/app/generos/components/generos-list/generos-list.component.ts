import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Genero } from '../../models/genero';

@Component({
  selector: 'app-generos-list',
  templateUrl: './generos-list.component.html',
  styleUrls: ['./generos-list.component.scss']
})
export class GenerosListComponent implements OnInit {

  @Input() generos: Genero[] = [];
  @Output() add = new EventEmitter(false);

  readonly displayedColumns = ['nome', 'actions'];

  constructor() {}

  ngOnInit(): void { }

  onAdd(){
    this.add.emit(true);
   }
}
