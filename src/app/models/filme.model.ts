import { Categoria } from './categoria.model';
import { Idioma } from './idioma.model';
export interface Filme{
  id?: any;
  titulo: string;
  sinopse: string;
  imagem: string;
  dataDeLancamento: string;
  duracao: string;
  idiomas: Idioma;
  categoria: Categoria;
}
