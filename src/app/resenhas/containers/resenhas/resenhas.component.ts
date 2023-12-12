import { Component, OnInit } from '@angular/core';
import { Resenha } from '../../models/resenha';
import { ResenhasService } from '../../services/resenhas.service';
import { Observable, catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-resenhas',
  templateUrl: './resenhas.component.html',
  styleUrls: ['./resenhas.component.scss']
})
export class ResenhasComponent implements OnInit {

  resenhas$: Observable<Resenha[]>;

  constructor(
    private resenhasService: ResenhasService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
    ) {
    this.resenhas$ = this.resenhasService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar resenhas!');
        return of([])
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  onAdd(){
    this.router.navigate(['newResenha'], {relativeTo: this.route})
  }

  ngOnInit(): void { }
}
