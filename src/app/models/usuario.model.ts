import { Idioma } from './idioma.model';
export interface Usuario{
  id?: number;
  nome: string;
  cpf: string;
  telefone: string;
  email: string;
  senha: string;
  idioma: Idioma;
}
