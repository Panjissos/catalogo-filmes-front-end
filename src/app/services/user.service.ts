import { Usuario } from './../models/usuario.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(){
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders().append('Authorization', token);
    return this.http.get<Usuario[]>("user/All", {headers});
  }

  getUserById(id: number){
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders().append('Authorization', token);
    return  this.http.get<Usuario>("user/"+ id,{headers});
  }

  updateUser(obj: Usuario){
    const token = localStorage.getItem('token') || '';

    const headers = new HttpHeaders().append('Authorization', token);
    return this.http.put("user/update", obj, {headers});
  }

  saveUser(obj: Usuario){
    const token = localStorage.getItem('token') || '';

    const headers = new HttpHeaders().append('Authorization', token);
    return this.http.post<Usuario>("user/create",obj, {headers});
  }

  deleteUser(id: number){
    const token = localStorage.getItem('token') || '';

    const headers = new HttpHeaders().append('Authorization', token);
    return this.http.delete("user/delete/"+ id, {headers});
  }
}
