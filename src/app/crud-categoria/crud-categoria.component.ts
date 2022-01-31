import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from './../services/category.service';
import { Categoria } from './../models/categoria.model';
import { IdiomaService } from './../services/idioma.service';
import { Idioma } from './../models/idioma.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-crud-categoria',
  templateUrl: './crud-categoria.component.html',
  styleUrls: ['./crud-categoria.component.scss']
})
export class CrudCategoriaComponent implements OnInit {

  idiomas!: Idioma[];
  formulario!: FormGroup;
  categoria!: Categoria;
  id!: number;

  constructor(private formBuilder: FormBuilder,
              private IdiomaService: IdiomaService,
              private categoriaService: CategoryService,
              private route: ActivatedRoute,
              private router: Router
  ) { }

  ngOnInit(): void {
    this.IdiomaService.getIdiomas().subscribe(data => {this.idiomas = data})
    this.criaCategoria();
    this.route.params.subscribe(params => {
      let idFilme = params['id']
      this.id = idFilme;
      console.log(idFilme);

      if(idFilme != null){
        console.log(this.getCategoriaByid(+idFilme));
      }

    });
  }

  criaCategoria(){
    this.formulario = this.formBuilder.group(
      {
        nome: [null],
        tag: [null],
        idiomas: [{}]
      }
    )
  }

  getCategoriaByid(id: number){
    this.categoriaService.getCategoriaById(id).subscribe(data => {
      this.formulario.patchValue({
        nome: [data.nome],
        tag: [data.tag],
        idiomas: [data.idiomas]
      })
    })

  }

  geraCategoria(){
    this.categoria = this.formulario.value;
    if(this.id != null){
      this.categoriaService.updateCategoria(this.categoria).subscribe(data => {this.router.navigate([''])});
    }else{
      this.categoriaService.saveCategoria(this.categoria).subscribe( data => {this.router.navigate([''])});
    }
  }

}
