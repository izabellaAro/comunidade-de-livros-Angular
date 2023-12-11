import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';

import { Resenha } from '../models/resenha';

@Injectable({
  providedIn: 'root'
})
export class ResenhasService {

  private readonly API = 'https://localhost:7010/api/Resenha';

  constructor(private HttpClient: HttpClient) { }

  list(){
    return this.HttpClient.get<Resenha[]>(`${this.API}?skip=0&take=10` )
    .pipe(
      first(),
      tap(resenha => console.log(resenha))
    );
  }

  save(record: Partial<Resenha>){
    return this.HttpClient.post<Resenha>(`${this.API}` , record).pipe(first());
  }
}

