import { CrudUsuarioTabelaComponent } from './crud-usuario-tabela/crud-usuario-tabela.component';
import { CrudTabelaCategoriaComponent } from './crud-tabela-categoria/crud-tabela-categoria.component';
import { UsuarioCrudComponent } from './usuario-crud/usuario-crud.component';
import { CrudCategoriaComponent } from './crud-categoria/crud-categoria.component';
import { AuthGuard } from './auth.guard';
import { CrudFilmeTabelaComponent } from './crud-filme-tabela/crud-filme-tabela.component';
import { CrudFilmeComponent } from './crud-filme/crud-filme.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardListComponent } from './card-list/card-list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component : CardListComponent},
  { path: 'login', component : LoginComponent},
  { path: 'crud-filme', component : CrudFilmeComponent, canActivate:[AuthGuard]},
  { path: 'crud-filme/:id', component : CrudFilmeComponent, canActivate:[AuthGuard]},
  { path: 'filme-tabela', component: CrudFilmeTabelaComponent, canActivate:[AuthGuard]},
  { path: 'crud-categoria', component: CrudCategoriaComponent, canActivate:[AuthGuard]},
  { path: 'crud-categoria/:id', component: CrudCategoriaComponent, canActivate:[AuthGuard]},
  { path: 'crud-usuario', component: UsuarioCrudComponent, canActivate:[AuthGuard]},
  { path: 'crud-usuario/:id', component: UsuarioCrudComponent , canActivate:[AuthGuard]},
  { path: 'crud-categoria-tabela', component: CrudTabelaCategoriaComponent, canActivate:[AuthGuard]},
  { path: 'crud-usuario-tabela', component: CrudUsuarioTabelaComponent, canActivate:[AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{ }
