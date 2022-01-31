import { Router } from '@angular/router';
import { UserService } from './../services/user.service';
import { Usuario } from './../models/usuario.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-usuario-tabela',
  templateUrl: './crud-usuario-tabela.component.html',
  styleUrls: ['./crud-usuario-tabela.component.scss']
})
export class CrudUsuarioTabelaComponent implements OnInit {

  usuarios!: Usuario[];

  constructor(private usuarioService: UserService,
              private router: Router

  ) { }

  ngOnInit(): void {
    this.getUsuario();
  }

  getUsuario(){
    this.usuarioService.getUser().subscribe(data => { this.usuarios = data });
  }

  deleteUsuario(id: any){
    this.usuarioService.deleteUser(id).subscribe({
      next: (v) => this.getUsuario(),
      error: (e) => console.error(e)
    });
  }

  atualizarUsuario(id: any){
    this.router.navigate(['crud-usuario/'+ id]);
  }



}
