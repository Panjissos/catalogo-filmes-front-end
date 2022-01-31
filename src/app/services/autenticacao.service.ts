import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private http: HttpClient) { }

  auteticarLogin(email: string, senha: string): Observable<any>{
    return this.http.post('auth', {
      email: email,
      senha: senha,
    });
  }

}
