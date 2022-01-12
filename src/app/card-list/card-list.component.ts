import { Filme } from './../models/filme.model';
import { MovieService } from '../services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  constructor(private filmeService: MovieService) { }

  listaFilmes!: Filme[];

  ngOnInit(): void {
    this.filmeService.getFilmes().subscribe(data=>{
      this.listaFilmes = data;
    })
  }

}
