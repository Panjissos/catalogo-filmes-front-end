import { MovieService } from './../services/movie.service';
import { Filme } from './../models/filme.model';
import { CategoryService } from './../services/category.service';
import { Categoria } from './../models/categoria.model';
import { IdiomaService } from './../services/idioma.service';
import { Idioma } from './../models/idioma.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-crud-filme',
  templateUrl: './crud-filme.component.html',
  styleUrls: ['./crud-filme.component.scss']
})
export class CrudFilmeComponent implements OnInit {

  formulario!: FormGroup;

  categorias!: Categoria[];

  idiomas!: Idioma[];

  filme!: Filme;

  id!: number;

  constructor(private idiomaService: IdiomaService,
              private categoriaService: CategoryService,
              private formBuilder: FormBuilder,
              private filmeService: MovieService,
              private route: ActivatedRoute,
              private router: Router
  ){}

  ngOnInit(): void {

    this.idiomaService.getIdiomas().subscribe(data => {this.idiomas = data});
    this.categoriaService.getCategoria().subscribe(data => {this.categorias = data});
    this.criaFilme();
    this.route.params.subscribe(params => {
      let idFilme = params['id']
      this.id = idFilme;
      console.log(idFilme);

      if(idFilme != null){
        console.log(this.getFilmeByid(+idFilme));
      }

    });

  }

  getFilmeByid(id: number){
    this.filmeService.getMovieById(id).subscribe(data => {
      this.formulario.patchValue({
        titulo: data.titulo,
        sinopse: data.sinopse,
        imagem: data.imagem,
        dataDeLancamento: data.dataDeLancamento,
        duracao: data.duracao,
        idiomas: data.idiomas,
        categoria: data.categoria
      });
    });


  }

  criaFilme(){
    this.formulario = this.formBuilder.group(
      {
        titulo: [null],
        sinopse: [null],
        imagem: [null],
        dataDeLancamento: [null],
        duracao: [null],
        idiomas: [
          {}
        ],
        categoria: [
          {}
        ]
      }
    );
  }




  crudFilme(){
    console.log(this.formulario.value);
    this.filme = this.formulario.value;
    if(this.id != null){
      this.filme.id = this.id;
      this.filmeService.updateMovie(this.filme).subscribe(data => {this.router.navigate(['/filme-tabela'])});
    }else{
      this.filmeService.saveMovie(this.filme).subscribe(data => { this.router.navigate(['/filme-tabela'])})

    }
    console.log(this.filme)

  }


}
