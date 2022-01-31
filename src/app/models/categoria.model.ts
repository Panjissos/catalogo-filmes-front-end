import { Idioma } from './idioma.model';
export interface Categoria{
  id?: any;
  nome: string;
  tag: string;
  idiomas: Idioma;
}
