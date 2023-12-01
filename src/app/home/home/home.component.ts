import { Component, Input, OnInit } from '@angular/core';
import { Home } from '../models/home';
import { AutoresService } from 'src/app/autores/services/autores.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Autores } from 'src/app/autores/models/autores';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  home: Home[] = [];

  constructor(
    private autoresService: AutoresService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
  }

  onAutores(){
    this.router.navigate(['autores'])
  }
}
