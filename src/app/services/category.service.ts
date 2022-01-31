import { Categoria } from './../models/categoria.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategoria(){
    return this.http.get<Categoria[]>("categoria/All");
  }

  getCategoriaById(id: number){
    return this.http.get<Categoria>("categoria/id/"+ id);
  }

  saveCategoria(categoria: Categoria){
    const token = localStorage.getItem('token') || '';

    const headers = new HttpHeaders().append('Authorization', token);
    return this.http.post<Categoria>("categoria/create",categoria, {headers});
  }


  deleteCategoria(id: number){
    const token = localStorage.getItem('token') || '';

    const headers = new HttpHeaders().append('Authorization', token);
    return this.http.delete("categoria/categoriaDel/"+id, {headers});
  }

  updateCategoria(obj: Categoria){
    const token = localStorage.getItem('token') || '';

    const headers = new HttpHeaders().append('Authorization', token);
    return this.http.put("categoria/categoriaUP", obj, {headers});
  }

  eventEmitterCategoria: EventEmitter<number> = new EventEmitter();

  enviaCategoria(id: number){
    this.eventEmitterCategoria.emit(id);
  }

}
