import { Router, ActivatedRoute } from '@angular/router';
import { Usuario } from './../models/usuario.model';
import { UserService } from './../services/user.service';
import { IdiomaService } from './../services/idioma.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Idioma } from './../models/idioma.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-usuario-crud',
  templateUrl: './usuario-crud.component.html',
  styleUrls: ['./usuario-crud.component.scss']
})
export class UsuarioCrudComponent implements OnInit {

  formulario!: FormGroup;

  usuario!: Usuario;

  idiomas!: Idioma[];

  id!: number;

  constructor(private formBuilder: FormBuilder,
              private idiomaService: IdiomaService,
              private usuarioService: UserService,
              private router: Router,
              private route: ActivatedRoute,
              private userService: UserService
  ) { }

  ngOnInit(): void {
    this.idiomaService.getIdiomas().subscribe(data => {this.idiomas = data});
    this.geraFormulario();
    this.route.params.subscribe(params => {
      let idUsuario = params['id']
      this.id = idUsuario;

      if(idUsuario != null){
        console.log(this.getUserById(+idUsuario));
      }

    });

  }

  getUserById(id: number){
    this.userService.getUserById(id).subscribe(data => {
      this.formulario.patchValue({
        nome: data.nome,
        cpf: data.cpf,
        email: data.email,
        telefone: data.telefone,
        senha: data.senha,
        idioma: data.idioma
      })
    })
  }



  geraFormulario(){
    this.formulario = this.formBuilder.group({
      nome: [null],
      cpf: [null],
      telefone: [null],
      email: [null],
      senha: [null],
      idioma: [
        {}
      ]
    });
  }

  crudUsuario(){
    this.usuario = this.formulario.value;
    if(this.id != null){
      this.usuario.id = this.id;
      this.userService.updateUser(this.usuario).subscribe(data => {this.router.navigate(['crud-usuario-tabela'])})
    }else{
      this.usuarioService.saveUser(this.usuario).subscribe(data => {this.router.navigate(['crud-usuario-tabela'])});
    }
  }

}
