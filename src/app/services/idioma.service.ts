import { Idioma } from './../models/idioma.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdiomaService {

  constructor(private http: HttpClient) { }

  getIdiomas(){
    return this.http.get<Idioma[]>("idiomas/All")
  }

  getIdiomasById(id: number){
    return this.http.get<Idioma>("idiomas/idioma?id="+ id)
  }

  saveIdioma(idioma: Idioma){
    return this.http.post<Idioma>("idiomas/create", idioma)
  }

  updateIdioma(obj: Idioma){
    return this.http.put("idiomas/update", obj)
  }
}
