import { CategoryService } from './../services/category.service';
import { Component, OnInit } from '@angular/core';
import { Categoria } from '../models/categoria.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-tabela-categoria',
  templateUrl: './crud-tabela-categoria.component.html',
  styleUrls: ['./crud-tabela-categoria.component.scss']
})
export class CrudTabelaCategoriaComponent implements OnInit {

  categorias!: Categoria[];

  constructor(private categoriaService: CategoryService,
              private router: Router
  ) { }

  ngOnInit(): void {
    this.getCategorias();

  }

  getCategorias(){
    this.categoriaService.getCategoria().subscribe(data => this.categorias = data );
  }

  atualizar(id:number){
    this.router.navigate(['crud-categoria/'+id]);
  }


  deletar(id: number){

    this.categoriaService.deleteCategoria(id).subscribe({
      next: (v) => this.getCategorias(),
      error: (e) => console.error(e)
  });

  }

}
