export interface Livros {
  id: number;
  titulo: string;
  genero: Genero;
  autor: Autor;
  qntPag: string;
}

export interface Genero {
  id: Number;
  nome: String;
}

export interface Autor {
  id: Number;
  nome: String;
  genero: Genero;
}
