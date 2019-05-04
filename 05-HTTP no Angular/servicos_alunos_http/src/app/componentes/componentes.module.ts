import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunoComponent } from './aluno/aluno.component';

@NgModule({
  declarations: [AlunoComponent],
  exports: [AlunoComponent],
  imports: [
    CommonModule
  ],
  providers: [
    {provide:'tratamento',useValue:"Mestre"}
  ]
})
export class ComponentesModule { }
