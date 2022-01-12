import { Categegoria } from './../models/categoria.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategoria(){
    return this.http.get<Categegoria[]>("categoria/All")
  }

  getCategoriaById(id: number){
    return this.http.get<Categegoria>("categoria/id?id="+ id)
  }

  saveCategoria(categoria: Categegoria){
    return this.http.post<Categegoria>("categoria/create",categoria)
  }


  deleteCategoria(id: number){
    return this.http.delete("categoria/categoriaDel?id="+id)
  }

  updateCategoria(obj: Categegoria){
    return this.http.put("categoria/categoriaUP", obj)
  }
}
