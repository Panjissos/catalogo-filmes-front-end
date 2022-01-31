import { Router } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { Filme } from '../models/filme.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-filme-tabela',
  templateUrl: './crud-filme-tabela.component.html',
  styleUrls: ['./crud-filme-tabela.component.scss']
})
export class CrudFilmeTabelaComponent implements OnInit {

  filmes!: Filme[];
  id!: number;

  constructor(private filmeService: MovieService,
              private router: Router
  ) { }

  ngOnInit(): void {
    this.getFilmes()

  }

  getFilmes(){
    this.filmeService.getFilmes().subscribe( data => this.filmes = data);
  }

  atualizar(id:number){
    this.router.navigate(['crud-filme/'+id]);
  }


  deleteFilme(id: number){

    this.filmeService.deleteMovie(id).subscribe({
      next: (v) => this.getFilmes(),
      error: (e) => console.error(e)
  });

  }
}
