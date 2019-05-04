import { UsuarioModule } from './usuario/usuario.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { ProdutoModule } from './produto/produto.module';

import { ProdutoPesquisaComponent } from './produto/produto-pesquisa/produto-pesquisa.component';
import { ProdutoFormComponent } from './produto/produto-form/produto-form.component';
import { UsuarioPesquisaComponent } from './usuario/usuario-pesquisa/usuario-pesquisa.component';
import { UsuarioFormComponent } from './usuario/usuario-form/usuario-form.component';
import { ProdutoEditComponent } from './produto/produto-edit/produto-edit.component';
import { Http404Component } from './http404.component';


const rotas: Routes = [
  {path:'',redirectTo:'usuarios', pathMatch:'full'},
  {path:'produtos',component:ProdutoPesquisaComponent},
  {path:'produtos/novo',component:ProdutoFormComponent},
  {path:'produtos/edit/:id/:nome',component:ProdutoEditComponent},
  {path:'usuarios',component:UsuarioPesquisaComponent},
  {path:'usuarios/novo',component:UsuarioFormComponent},
  {path:'http404',component:Http404Component},
  {path:'**',redirectTo:'http404'}
]

@NgModule({
  declarations: [
    AppComponent,
    Http404Component
  ],
  imports: [
    BrowserModule,
    ProdutoModule,
    UsuarioModule,
    RouterModule.forRoot(rotas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
