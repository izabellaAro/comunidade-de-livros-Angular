import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Autores } from '../../models/autores';

@Component({
  selector: 'app-autores-list',
  templateUrl: './autores-list.component.html',
  styleUrls: ['./autores-list.component.scss']
})

export class AutoresListComponent implements OnInit {

  @Input() autores: Autores[] = [];
  @Output() add = new EventEmitter(false);

  readonly displayedColumns = ['nome', 'genero', 'actions'];

  constructor() {}

  ngOnInit(): void { }

  onAdd(){
    this.add.emit(true);
   }
}
