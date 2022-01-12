import { Filme } from '../models/filme.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getFilmes(){
    return this.http.get<Filme[]>('filmes/All')
  }

  getMovieById(id: number){
    return this.http.get<Filme>("filmes?id="+ id)
  }

  getMovieByCategory(id: number){
    return this.http.get<Filme>("filmes/Cat?id="+ id)
  }

  getMovieByname(filme: string){
    return this.http.get<Filme>("filmes/findByname?filme="+ filme)
  }

  saveMovie(filme: Filme){
    return this.http.post<Filme>("filmes/create",filme)
  }

  deleteMovie(id: number){
    return this.http.delete("filmes/delete?id="+ id)
  }

  updateMovie(obj: Filme){
    return this.http.put("filmes/update", obj)
  }

}
