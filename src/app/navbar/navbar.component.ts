import { Router } from '@angular/router';
import { MovieService } from './../services/movie.service';
import { Categoria } from './../models/categoria.model';
import { CategoryService } from './../services/category.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  categorias!: Categoria[];
  formulario = new FormControl;
  route = location.pathname;
  contrast: boolean = false;
  pathAuth = localStorage.getItem("token");

  constructor(private categoryService: CategoryService,
              private movieService: MovieService,
              private router: Router) { }

  ngOnInit(): void {
    this.categoryService.getCategoria().subscribe( categoria => {
      this.categorias = categoria;
    })
  }

  idCategoria(id: any){
      this.categoryService.enviaCategoria(id);
  }

  filmeByName(nome: any){
    if(nome != null){
      this.movieService.enviaFilmePorNome(this.formulario.value);
  }
  }

  dropdownEditar(opcao: any){
   /* if(opcao == 'tabelaF'){
      this.router.navigate(['crud-categoria-tabela']);
    }else if(opcao == 'tabelaC'){

      this.router.navigate(['filme-tabela']);
    }*/
    switch (opcao) {
      case 'tabelaF':
        this.router.navigate(['crud-categoria-tabela']);
        break;
      case 'tabelaC':
        this.router.navigate(['filme-tabela']);
        break;
      case 'crudC':
        this.router.navigate(['crud-categoria']);
        break;
      case 'crudF':
        this.router.navigate(['crud-filme']);
        break;
      case 'tabelaU':
        this.router.navigate(['crud-usuario-tabela']);
        break;
      default:
        console.log("algo de errado")
        break;
    }

  }

  logout(){
    localStorage.removeItem("token");
  }

  highContrast(){
    if(!this.contrast){
      document.body.classList.add('high-contrast');
    }else{
      document.body.classList.remove('high-contrast');
    }
    this.contrast = !this.contrast;
  }
}


