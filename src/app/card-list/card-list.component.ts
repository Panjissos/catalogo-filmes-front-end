import { CategoryService } from './../services/category.service';
import { Filme } from './../models/filme.model';
import { MovieService } from '../services/movie.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  constructor(private filmeService: MovieService,
              private categoriaService: CategoryService) {
                this.categoriaService.eventEmitterCategoria.subscribe(
                  id => {
                    if(id == 0){
                      this.getFilmes();
                    }else{
                      this.filmeService.getMovieByCategory(id).subscribe( data => this.listaFilmes = data)
                    }
                  }
                )
                this.filmeService.eventEmitterFilme.subscribe(
                  nome => {
                    if( nome == null){
                      this.getFilmes();
                    }else{
                      this.filmeService.getMovieByName(nome).subscribe(data => this.listaFilmes = data)
                    }
                  }
                )
              }
  listaFilmes!: Filme[];

  ngOnInit(): void {
    this.getFilmes();
  }

  getFilmes(){
    this.filmeService.getFilmes().subscribe(data=>{
      this.listaFilmes = data;
    })

  }

}
