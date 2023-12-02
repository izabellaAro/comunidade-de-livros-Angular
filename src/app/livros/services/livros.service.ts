import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';

import { Livros } from '../models/livros';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  private readonly API = 'https://localhost:7010/Livro';

  constructor(private HttpClient: HttpClient) { }

  list(){
    return this.HttpClient.get<Livros[]>(`${this.API}?skip=0&take=50` )
    .pipe(
      first(),
      tap(livros => console.log(livros))
    );
  }

  save(record: Partial<Livros>){
    return this.HttpClient.post<Livros>(`${this.API}` , record).pipe(first());
  }
}
