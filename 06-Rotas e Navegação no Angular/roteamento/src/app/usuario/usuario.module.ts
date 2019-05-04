import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuarioPesquisaComponent } from './usuario-pesquisa/usuario-pesquisa.component';

@NgModule({
  declarations: [UsuarioFormComponent, UsuarioPesquisaComponent],
  exports: [UsuarioFormComponent, UsuarioPesquisaComponent],
  imports: [
    CommonModule
  ]
})
export class UsuarioModule { }
