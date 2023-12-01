import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';

import { Autores } from '../models/autores';

@Injectable({
  providedIn: 'root'
})
export class AutoresService {

  private readonly API = 'https://localhost:7010/api/Autor';

  constructor(private HttpClient: HttpClient) { }

  list(){
    return this.HttpClient.get<Autores[]>(`${this.API}?skip=0&take=15` )
    .pipe(
      first(),
      tap(autores => console.log(autores))
    );
  }

  save(record: Partial<Autores>){
    return this.HttpClient.post<Autores>(`${this.API}` , record).pipe(first());
  }
}


