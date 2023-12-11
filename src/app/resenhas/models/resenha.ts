export interface Resenha {
  id: number;
  tituloLivro: string;
  nomeAutor: Autor;
  nomeGenero: Genero;
  textoResenha: string;
  tituloResenha: string;
}

// export interface tituloLivro{
//   tituloLivro: string;
// }

export interface Genero{
  id: Number;
  nome: String;
}

export interface Autor{
  id: Number;
  nome: String;
}
