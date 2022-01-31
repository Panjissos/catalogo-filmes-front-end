import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card-list/card/card.component';
import { CardListComponent } from './card-list/card-list.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CrudFilmeComponent } from './crud-filme/crud-filme.component';
import { CrudFilmeTabelaComponent } from './crud-filme-tabela/crud-filme-tabela.component';
import { CrudCategoriaComponent } from './crud-categoria/crud-categoria.component';
import { UsuarioCrudComponent } from './usuario-crud/usuario-crud.component';
import { CrudTabelaCategoriaComponent } from './crud-tabela-categoria/crud-tabela-categoria.component';
import { CrudUsuarioTabelaComponent } from './crud-usuario-tabela/crud-usuario-tabela.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    CardListComponent,
    LoginComponent,
    CrudFilmeComponent,
    CrudFilmeTabelaComponent,
    CrudCategoriaComponent,
    UsuarioCrudComponent,
    CrudTabelaCategoriaComponent,
    CrudUsuarioTabelaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
