import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AutoresService } from 'src/app/autores/services/autores.service';
import { LivrosService } from 'src/app/livros/services/livros.service';

import { Home } from '../models/home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  home: Home[] = [];

  constructor(
    private autoresService: AutoresService,
    private livrosSerive: LivrosService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
  }

  onAutores(){
    this.router.navigate(['autores'])
  }

  onLivros(){
    this.router.navigate(['livros'])
  }
}
