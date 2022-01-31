import { Filme } from '../models/filme.model';
import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getFilmes(){
    return this.http.get<Filme[]>('filmes/All');
  }

  getMovieById(id: number){
    return this.http.get<Filme>("filmes/"+ id);
  }

  getMovieByCategory(id: number){
    return this.http.get<Filme[]>("filmes/Cat/"+ id);
  }

  getMovieByName(filme: string){
    return this.http.get<Filme[]>("filmes/findByname/"+ filme);
  }

  saveMovie(filme: Filme){
    const token = localStorage.getItem('token') || '';

    const headers = new HttpHeaders().append('Authorization', token);
    return this.http.post<Filme>("filmes/create",filme, {headers});
  }

  deleteMovie(id: number){

    const token = localStorage.getItem('token') || '';

    const headers = new HttpHeaders().append('Authorization', token);
    return this.http.delete<String>("filmes/delete/"+ id,{headers});

  }

  updateMovie(obj: Filme){
    const token = localStorage.getItem('token') || '';

    const headers = new HttpHeaders().append('Authorization', token);

    return this.http.put("filmes/update", obj, {headers});
  }

  eventEmitterFilme: EventEmitter<string> = new EventEmitter();

  enviaFilmePorNome(nome: string){
    this.eventEmitterFilme.emit(nome);
  }

}
