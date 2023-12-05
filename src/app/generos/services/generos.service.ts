import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';

import { Genero } from '../models/genero';

@Injectable({
  providedIn: 'root'
})
export class GenerosService {

  private readonly API = 'https://localhost:7010/api/Genero';

  constructor(private HttpClient: HttpClient) { }

  list(){
    return this.HttpClient.get<Genero[]>(`${this.API}?skip=0&take=10`)
    .pipe(
      first(),
      tap(genero => console.log(genero))
    );
  }

  save(record: Partial<Genero>){
    return this.HttpClient.post<Genero>(`${this.API}` , record).pipe(first());
  }
}
