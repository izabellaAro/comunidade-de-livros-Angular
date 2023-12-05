import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Genero } from '../../../models/genero';
import { GenerosService } from '../../../services/generos.service';

@Component({
  selector: 'app-generos',
  templateUrl: './generos.component.html',
  styleUrls: ['./generos.component.scss']
})
export class GenerosComponent implements OnInit {

  generos$: Observable<Genero[]>;

  constructor(
    private generosService: GenerosService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
    ) {
    this.generos$ = this.generosService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar gêneros!');
        return of([])
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void { }

  onAdd(){
    this.router.navigate(['new'], {relativeTo: this.route})
  }
}

