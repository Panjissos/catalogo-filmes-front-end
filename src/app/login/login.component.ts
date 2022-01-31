import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from '../services/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = '';
  senha = '';

  constructor(private authService: AutenticacaoService,
              private router: Router
  ){}

  ngOnInit(): void {

  }

  login(){
    this.authService.auteticarLogin(this.email, this.senha)
    .subscribe({
      next: (r) => {
        let token = r.tipo + " " + r.token;
        localStorage.setItem("token", token);
        this.router.navigate(['/']);
      },
      error: (e) => {console.log(e)}
    })
  }

}
