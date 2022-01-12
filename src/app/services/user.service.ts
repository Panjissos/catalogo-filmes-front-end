import { Usuario } from './../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(){
    return this.http.get<Usuario[]>("user/All")
  }

  getUserById(id: number){
    return  this.http.get<Usuario>("user?id="+ id)
  }

  updateUser(obj: Usuario){
    return this.http.put("user/update", obj)
  }

  saveUser(obj: Usuario){
    return this.http.post<Usuario>("user/create",obj)
  }

  deleteUser(id: number){
    return this.http.delete("user/delete?id="+ id)
  }
}
