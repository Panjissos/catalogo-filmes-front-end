import { Idioma } from './../models/idioma.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdiomaService {

  constructor(private http: HttpClient) { }

  getIdiomas(){
    return this.http.get<Idioma[]>("idiomas/All");
  }

  getIdiomasById(id: number){
    return this.http.get<Idioma>("idiomas/idioma/"+ id);
  }

  saveIdioma(idioma: Idioma){
    const token = localStorage.getItem('token') || '';

    const headers = new HttpHeaders().append('Authorization', token);
    return this.http.post<Idioma>("idiomas/create", idioma, {headers});
  }

  updateIdioma(obj: Idioma){
    const token = localStorage.getItem('token') || '';

    const headers = new HttpHeaders().append('Authorization', token);
    return this.http.put("idiomas/update", obj, {headers});
  }

  deleteIdioma(id: number){
    const token = localStorage.getItem('token') || '';

    const headers = new HttpHeaders().append('Authorization', token);
    return this.http.delete<String>("idiomas/delete/"+ id, {headers});
  }

}
