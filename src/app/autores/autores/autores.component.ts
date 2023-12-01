import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Autores } from '../models/autores';
import { AutoresService } from './../services/autores.service';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.scss']
})
export class AutoresComponent implements OnInit {

  autores$: Observable<Autores[]>;

  constructor(
    private autoresService: AutoresService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
    ) {
    this.autores$ = this.autoresService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar autores!');
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
