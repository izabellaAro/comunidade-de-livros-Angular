import { Component, Input, OnInit } from '@angular/core';
import { Autores } from '../models/autores';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-autores-list',
  templateUrl: './autores-list.component.html',
  styleUrls: ['./autores-list.component.scss']
})
export class AutoresListComponent implements OnInit {

  @Input() autores: Autores[] = [];

  readonly displayedColumns = ['nome', 'genero', 'actions'];

  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onAdd(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
