import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoFormComponent } from './produto-form/produto-form.component';
import { ProdutoPesquisaComponent } from './produto-pesquisa/produto-pesquisa.component';
import { ProdutoEditComponent } from './produto-edit/produto-edit.component';

@NgModule({
  declarations: [ProdutoFormComponent, ProdutoPesquisaComponent, ProdutoEditComponent],
  exports: [ProdutoFormComponent, ProdutoPesquisaComponent, ProdutoEditComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ProdutoModule { }
